import React from 'react';
import { Container, Title, TextInput, PasswordInput, Button } from '@mantine/core';
import OAuthButton from '../shared/components/oauth';

export const Register: React.FC = () => {
    return (
        <Container>
            <Title order={2}>Register</Title>
            <TextInput label="Email" placeholder="you@example.com" required />
            <PasswordInput label="Password" placeholder="Your password" required />
            <Button>Register</Button>
            <OAuthButton provider="Google" />
        </Container>
    );
};
