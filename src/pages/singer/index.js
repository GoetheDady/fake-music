import React, { Component, createRef } from 'react';
import _concat from 'lodash/concat';
import {
  SingerStyle, BottomLoading,
} from './style';
import SelectOptions from './components/selectOptions';
import Loading from '../../components/loading';
import request from '../../api';
import SingerList from './components/singerList';

class Singer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: -1,
      area: -1,
      initial: -1,
      list: [],
      loadingList: true,
      showLoading: true,
    };
    this.loadingDom = createRef();
    this.listDom = createRef();
  }

  componentDidMount() {
    const { listDom, loadingDom } = this;
    this.getList();
    listDom.current.onscroll = () => {
      const listTop = listDom.current.getBoundingClientRect().top;
      const loadingTop = loadingDom.current.getBoundingClientRect().top;
      if ((loadingTop - listTop - 630) < 0) {
        this.debounceLoadList();
      }
    };
  }

  componentWillUnmount() {
    this.listDom.current.onscroll = null;
  }

  async getList() {
    const {
      type, area, initial, list,
    } = this.state;
    const { artists, more } = await request.get('/artist/list', {
      params: {
        limit: 15,
        offset: list.length,
        type,
        area,
        initial,
      },
    });
    const newList = _concat(list, artists);
    if (!more) {
      this.listDom.current.onscroll = null;
    }
    this.setState(() => ({
      list: newList,
      loadingList: true,
      showLoading: more,
    }));
  }

  optionsOnChange = (option, value) => {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state[option] === value) {
      return;
    }
    this.setState(() => ({
      [`${option}`]: value,
      list: [],
    }), () => {
      this.getList();
    });
  };

  debounceLoadList() {
    const { loadingList } = this.state;
    if (!loadingList) {
      return;
    }
    this.setState(() => ({
      loadingList: false,
    }), this.getList);
  }

  render() {
    const {
      type, area, initial, showLoading, list,
    } = this.state;
    return (
      <SingerStyle ref={this.listDom}>
        <SelectOptions
          type={type}
          area={area}
          initial={initial}
          onChange={this.optionsOnChange}
        />
        <SingerList list={list} />
        {
          showLoading && (
            <BottomLoading ref={this.loadingDom}>
              <Loading />
            </BottomLoading>
          )
        }
      </SingerStyle>
    );
  }
}

export default Singer;
