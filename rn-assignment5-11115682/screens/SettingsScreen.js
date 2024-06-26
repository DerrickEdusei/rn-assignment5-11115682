// screens/SettingsScreen.js
import React from 'react';
import { View, Text, Switch } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SettingsScreen = () => {
  const { theme, toggleTheme } = useTheme();
  const [isEnabled, setIsEnabled] = React.useState(theme === darkTheme);

  const toggleSwitch = () => {
    toggleTheme();
    setIsEnabled(previousState => !previousState);
  };

  return (
    <Container>
      <Header>
        <Title>Settings</Title>
      </Header>
      <SettingsItem>
        <Icon name="palette" size={24} color={theme.text} />
        <SettingsText>Dark Mode</SettingsText>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </SettingsItem>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
`;

const Header = styled.View`
  margin-bottom: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const SettingsItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.borderColor};
`;

const SettingsText = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.text};
  margin-left: 16px;
  flex: 1;
`;

export default SettingsScreen;
