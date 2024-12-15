import React from 'react';
import { Button } from '@mantine/core';

interface OAuthButtonProps {
    provider: string;
}

const OAuthButton: React.FC<OAuthButtonProps> = ({ provider }) => {
    const handleOAuthLogin = () => {
        // Implement OAuth login logic here
        console.log(`Logging in with ${provider}`);
    };

    return (
        <Button onClick={handleOAuthLogin}>
            Login with {provider}
        </Button>
    );
};

export default OAuthButton;