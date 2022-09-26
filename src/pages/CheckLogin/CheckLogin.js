import React from 'react';
import { Button, Card, Form, Hero, Input, Link } from 'react-daisyui';

const CheckLogin = () => {
    return (
        <div>
            <Hero>
                <Hero.Content >
                    
                    <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Card.Body>
                            <Form>
                                <Form.Label title="Email" />
                                <Input
                                    type="text"
                                    placeholder="email"
                                    className="input-bordered"
                                />
                            </Form>
                            <Form>
                                <Form.Label title="Password" />
                                <Input
                                    type="text"
                                    placeholder="password"
                                    className="input-bordered"
                                />
                                <label className="label">
                                    <Link href="#" className="label-text-alt" hover>
                                        Forgot password?
                                    </Link>
                                </label>
                            </Form>
                            <Form className="mt-6">
                                <Button>Login</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Hero.Content>
            </Hero>
        </div>
    );
};

export default CheckLogin;