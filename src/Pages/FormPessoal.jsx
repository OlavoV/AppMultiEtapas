import * as C from "@chakra-ui/react"
import { Radio, RadioGroup } from '@chakra-ui/react'

const FormPessoal = () => {
    return(
        <RadioGroup defaultValue='2'>
        <C.VStack spacing={4} >
            <h1>
                Cadastro - Usuário
            </h1>
            <Radio size='md' colorScheme='blue' value='1'>M</Radio>
            <Radio size='md' colorScheme='pink' value='2'>F</Radio>
            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="CPF"/>
            <C.Input type="email" placeholder="Email"/>
        </C.VStack>
        </RadioGroup>
    )
}







export default FormPessoal