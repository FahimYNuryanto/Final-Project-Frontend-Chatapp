import React, { useState } from 'react'
import { VStack } from '@chakra-ui/layout'
import { FormLabel, FormControl } from '@chakra-ui/form-control'
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"
import { Button } from "@chakra-ui/button"

const Signup = () => {
    const {show, setShow} = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpasswords, setConfirmpasswords] = useState();
    const [pic, setPic] = useState();

    const handleClick = () => setShow(!show);

    const postDetails = (pics) => {};

    const submitHandler = () => {};

  return (
    <VStack spacing="5px" color="black">
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input
                placeholder="Enter your name"
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>

        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input
                type={show? "text" :"password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show" }
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input
                type={show? "text" :"password"}
                placeholder="Confirm Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show" }
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id="pic">
            <FormLabel>Upload your Picture</FormLabel>
            <Input
                type="file"
                p={1.5}
                accept="image/*"
                onChange={(e) => postDetails(e.target.value[0])}
            />
        </FormControl>

        <Button 
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup