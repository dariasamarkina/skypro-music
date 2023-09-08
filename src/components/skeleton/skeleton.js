import * as S from './styles';

function Skeleton({ width, height }) {
    const style = {
      width,
      height,
      backgroundColor: '#313131'
    }
    return <div style={style} />
  }
  
  export function SkeletonPlayer() {
    return (
      <S.TrackPlaycontain>
        <S.TrackPlayImage>
          <Skeleton width="51px" height="51px"/>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <Skeleton width="59px" height="15px"/>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <Skeleton width="59px" height="15px"/>
        </S.TrackPlayAlbum>
      </S.TrackPlaycontain>
    )
  }
  
  export function SkeletonSidebarList() {
    return (
      <S.SidebarList>
        <S.SidebarItem>
          <Skeleton width="250px" height="150px"/>
        </S.SidebarItem>
        <S.SidebarItem>
          <Skeleton width="250px" height="150px"/>
        </S.SidebarItem>
        <S.SidebarItem>
          <Skeleton width="250px" height="150px"/>
        </S.SidebarItem>
      </S.SidebarList>
    )
  }
  
  function SkeletonPlaylistItemPattern() {
    return (
      <S.PlaylistItem>
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <Skeleton width="51px" height="51px"/>
            </S.TrackTitleImage>
            <S.TrackTitleText>
              <Skeleton width="356px" height="19px"/>
            </S.TrackTitleText>
          </S.TrackTitle>
          <S.TrackAuthor>
            <Skeleton width="271px" height="19px"/>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <Skeleton width="305px" height="19px"/>
          </S.TrackAlbum>
        </S.PlaylistTrack>
      </S.PlaylistItem>
    )
  }
  
  export function SkeletonPlaylistItems() {
    return (
      <S.ContentPlaylistItems>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
        <SkeletonPlaylistItemPattern/>
      </S.ContentPlaylistItems>
    )
  }