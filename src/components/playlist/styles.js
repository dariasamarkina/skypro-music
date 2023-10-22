// eslint-disable-next-line import/no-extraneous-dependencies
import { styled } from 'styled-components';

export const ContentPlaylistItems = styled.div`
`

export const ContentPlaylist = styled.div`
  height: 673px;
  width: 1084px;
  padding-right: 4px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow-y: auto;

  // overflow-y: scroll;
  scrollbar-color: gray;

  &::-webkit-scrollbar {
    background-color: #313131;
    width: 4px;
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }
  
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #4b4949;
`

