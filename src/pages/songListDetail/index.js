import React, { Component, createRef } from 'react';
import _concat from 'lodash/concat';
import request from '../../api';
import {
  SongListDetailStyle, DetailDesc, DetailImg, DetailInfo, DetailInfoBtns,
  DetailInfoBtnsLeft, DetailInfoBtnsRight, DetailInfoTitle, DetailInfoSubtitle, BottomLoading,
} from './style';
import Icon from '../../components/icon';
import List from '../../components/list';
import Loading from '../../components/loading';
import { withRouter } from '../../hooks';

class SongListDetail extends Component {
  constructor(props) {
    super(props);
    this.detailDom = createRef();
    this.loadingDom = createRef();
    this.state = {
      detail: {},
      trackIdsArr: [],
      songDetailList: [],
      getNewDetailList: true,
      showLoading: true,
    };
  }

  componentDidMount() {
    const { detailDom, loadingDom, state: { getNewDetailList } } = this;
    this.getSongListDetail();
    detailDom.current.onscroll = () => {
      const detailTop = detailDom.current.getBoundingClientRect().top;
      const loadingTop = loadingDom.current.getBoundingClientRect().top;
      if ((loadingTop - detailTop - 630) < 0) {
        this.getSongListDetailByTrackIds();
      }
    };
  }

  componentWillUnmount() {
    this.detailDom.current.onscroll = null;
  }

  async getSongListDetail() {
    const { props: { params: { id } } } = this;
    const { playlist, playlist: { trackIds } } = await request.get(`/playlist/detail?id=${id}`);
    this.setState(() => ({
      detail: playlist,
      trackIdsArr: trackIds,
    }), () => {
      this.getSongListDetailByTrackIds();
    });
  }

  async getSongListDetailByTrackIds() {
    const { getNewDetailList } = this.state;
    if (!getNewDetailList) {
      return;
    }
    this.setState(() => ({
      getNewDetailList: false,
    }), async () => {
      const { trackIdsArr, songDetailList } = this.state;
      const songListLength = songDetailList.length;
      const requestTrackIds = trackIdsArr.slice(songListLength, songListLength + 10).map((item) => item.id);
      const { songs } = await request.get('/song/detail', {
        params: {
          ids: requestTrackIds.join(','),
        },
      });
      const newDetailList = _concat(songDetailList, songs);
      const haveNewDetail = newDetailList.length !== trackIdsArr.length;
      if (!haveNewDetail) {
        this.detailDom.current.onscroll = null;
      }
      this.setState(() => ({
        songDetailList: newDetailList,
        getNewDetailList: haveNewDetail,
        showLoading: haveNewDetail,
      }));
    });
  }

  render() {
    const { detail, songDetailList, showLoading } = this.state;
    return (
      <SongListDetailStyle data-name="歌单详情" ref={this.detailDom}>
        <DetailDesc>
          {
          detail?.coverImgUrl && <DetailImg src={detail.coverImgUrl} />
        }
          <DetailInfo>
            <DetailInfoBtns>
              <DetailInfoBtnsLeft>
                <Icon name="play" fontSize="16px" />
                播放
              </DetailInfoBtnsLeft>
              <DetailInfoBtnsRight>
                <Icon name="add" fontSize="16px" />
                Add
              </DetailInfoBtnsRight>
            </DetailInfoBtns>
            <DetailInfoSubtitle>
              {detail.description}
            </DetailInfoSubtitle>
            <DetailInfoTitle>
              {detail.name}
            </DetailInfoTitle>
          </DetailInfo>
        </DetailDesc>
        <List list={songDetailList} />
        {
          showLoading && (
            <BottomLoading ref={this.loadingDom}>
              <Loading />
            </BottomLoading>
          )
        }
      </SongListDetailStyle>
    );
  }
}

export default withRouter(SongListDetail);
