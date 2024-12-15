import React from 'react';
import {Container, Title, Text, Button, Combobox} from '@mantine/core';
import {Header} from "../shared/components/header/header";

export const HomePage: React.FC = () => {
    return (
        <Container>
            <Header/>
            <Title order={1}>Welcome to TeachMe</Title>
            <Text>Start your learning journey with us!</Text>
            <Button variant="outline">Get Started</Button>
        </Container>
    );
};
