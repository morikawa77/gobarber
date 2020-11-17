import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px ${Platform.OS === 'android' ? 20 : 60}px;
`;

export const Header = styled.View`
  width: 100%;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const BackButton = styled.TouchableOpacity``;

export const LogOutButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 20px;
  line-height: 28px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 29px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  position: relative;
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 96px;
  margin-bottom: 29px;
`;

export const UserAvatarIconView = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  background: '#ff9000';
  border-radius: 25px;
  width: 50px;
  height: 50px;
`;
