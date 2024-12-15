import React from 'react';
import { Container, Title, TextInput, PasswordInput, Button } from '@mantine/core';
import OAuthButton from '../shared/components/oauth';

export const Login: React.FC = () => {
    return (
        <Container>
            <Title order={2}>Login</Title>
            <TextInput label="Email" placeholder="you@example.com" required />
            <PasswordInput label="Password" placeholder="Your password" required />
            <Button>Login</Button>
            <OAuthButton provider="Google" />
        </Container>
    );
};
