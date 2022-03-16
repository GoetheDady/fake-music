import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/file';
import { connect } from 'react-redux';
import localforage from 'localforage';
import Icon from '../icon';
import { constants } from './store';
import { constants as constantsDB } from './DB';

const PlayerStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  >.really-player {
    position: absolute;
    left: 999999px;
  }
`;

const MusicInfo = styled.div`
  display: flex;
`;

const MusicInfoImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: black;
  margin-right: 20px;
`;

const NoMusicInfoImg = styled.div`
    width: 60px;
    height: 60px;
    background-color: rgba(155, 178, 210, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

const MusicDesc = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

const MusicName = styled.div`
  display: flex;
  font-size: 16px;
  margin-bottom: 5px;
`;

const MusicSinger = styled.div`
  display: flex;
  font-size: 12px;
  font-weight: lighter;
`;

const MusicRange = styled.input.attrs({
  type: 'range',
})`
  height: 2px;
  display: block;
  width: 100%;
  /* padding: 5px 0; */
  margin: 10px 0;
  appearance: none;
  background-image: linear-gradient(to right, rgba(155, 178, 210, 1) ${(props) => props.percent}%, rgba(155, 178, 210, .2) ${(props) => 100 % -props.percent}%);
  &::-webkit-slider-thumb {
    appearance: none;
    height: 10px;
    width: 10px;
    background-color: rgba(155, 178, 210, 1);
    border-radius: 50%;
  }
`;

const MusicControl = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SpanWrapper = styled.div`
  display: 123;
  justify-content: center;
  align-items: center;
  > span {
    margin: 0 5px;
    color: rgba(155, 178, 210, .6);
    cursor: pointer;
    &:hover {
      color: rgba(155, 178, 210, 1);
    }
  }
`;

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      played: 0,
    };
    this.player = null;
  }

  componentDidMount() {
    const { initPlayerData } = this.props;
    localforage.getItem(constantsDB.PLAY_DB).then(({ playList = [], currentPlayIndex = 0 }) => {
      initPlayerData(playList, currentPlayIndex);
    });
  }

  ref = (player) => {
    this.player = player;
  };

  rangeOnChange = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      played: value,
    }));
  };

  rangeOnMouseUp = (e) => {
    const { value } = e.target;
    this.setState(() => ({
      played: value,
    }), () => {
      this.player.seekTo(value);
    });
  };

  render() {
    const { played } = this.state;
    const {
      playList, currentPlayIndex, playing, changePlayingStatus,
      playNextSong, playPrevSong,
    } = this.props;
    const currentSong = playList[currentPlayIndex];
    const url = `https://music.163.com/song/media/outer/url?id=${currentSong?.id}.mp3`;
    const name = currentSong?.name;
    const artist = currentSong?.ar.map((item) => item.name).join('/');
    const pic = currentSong?.al.picUrl;
    return (
      <PlayerStyle>
        <MusicInfo>
          {
            pic ? <MusicInfoImg src={pic} /> : (
              <NoMusicInfoImg>
                <Icon name="musical-notes-outline" fontSize="30px" />
              </NoMusicInfoImg>
            )
          }
          <MusicDesc>
            <MusicName>{name}</MusicName>
            <MusicSinger>{artist}</MusicSinger>
          </MusicDesc>
        </MusicInfo>
        <MusicRange
          min="0"
          max="1"
          step="any"
          value={played}
          onChange={this.rangeOnChange}
          onMouseUp={this.rangeOnMouseUp}
          percent={played * 100}
        />
        <MusicControl>
          <SpanWrapper onClick={() => { playPrevSong(); }}>
            <Icon name="play-skip-back" fontSize="24px" />
          </SpanWrapper>
          <SpanWrapper
            onClick={() => {
              changePlayingStatus(!playing);
            }}
          >
            <Icon
              name={playing ? 'pause' : 'play'}
              fontSize="36px"
            />
          </SpanWrapper>
          <SpanWrapper onClick={() => { playNextSong(); }}>
            <Icon name="play-skip-forward" fontSize="24px" />
          </SpanWrapper>
        </MusicControl>
        <ReactPlayer
          ref={this.ref}
          className="really-player"
          playing={playing}
          url={url}
          onProgress={(params) => {
            const { played: havePlayed, loaded } = params;
            this.setState({
              played: havePlayed,
            });
          }}
        />
      </PlayerStyle>
    );
  }
}

const mapStateToProps = ({ PlayStore }) => ({
  playList: PlayStore.playList,
  currentPlayIndex: PlayStore.currentPlayIndex,
  playing: PlayStore.playing,
});
const mapDispatchToProps = (dispatch) => ({
  initPlayerData(playList, currentPlayIndex) {
    dispatch({
      type: constants.PLAYER_INIT_DATA,
      payload: {
        playList,
        currentPlayIndex,
      },
    });
  },
  changePlayingStatus(playing) {
    dispatch({
      type: constants.PLAYER_CHANGE_PLAYING,
      payload: {
        playing,
      },
    });
  },
  playNextSong() {
    dispatch({ type: constants.PLAYER_PLAY_NEXT_SONG });
  },
  playPrevSong() {
    dispatch({ type: constants.PLAYER_PLAY_PREV_SONG });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
