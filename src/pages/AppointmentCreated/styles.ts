import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  color: #f4ede8;
  font-size: 30px;
  margin: 0 24px 24px;
`;

export const Description = styled.Text`
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  font-size: 14px;
  color: #999591;
`;

export const OkButton = styled(RectButton)`
  width: 100px;
  height: 50px;
  background: #ff9000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #312e38;
`;
