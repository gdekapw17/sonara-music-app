import { HiOutlineHashtag, HiOutlineHome, HiOutlinePhotograph, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: '132' },
  { title: 'Rap/Hip Hop', value: '116' },
  { title: 'Rock', value: '152' },
  { title: 'Dance', value: '113' },
  { title: 'R&B', value: '165' },
  { title: 'Alternative', value: '85' },
  { title: 'Electro', value: '106' },
  { title: 'Folk', value: '466' },
  { title: 'Reggae', value: '144' },
  { title: 'Jazz', value: '129' },
  { title: 'Classical', value: '98' },
  { title: 'World Music', value: '173' },
  { title: 'K-Pop', value: '197' },
  { title: 'Asian Music', value: '16' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Albums', to: '/top-albums', icon: HiOutlinePhotograph },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
