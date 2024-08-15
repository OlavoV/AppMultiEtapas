import * as C from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const FormProjeto = () => {
    return(
        <C.VStack spacing={5}>
            <h1>
                Cadastro - Projeto
            </h1>
            <C.Input type="text" placeholder="Projeto"/>
            <C.Input type="text" placeholder="Área"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
            <Checkbox defaultChecked>CETAFEST</Checkbox>
            <Checkbox defaultChecked>CETICC</Checkbox>
            <Checkbox defaultChecked>CETCC</Checkbox>
            <Checkbox defaultChecked>CETAFAJU</Checkbox>
        </C.VStack>
    )
}






export default FormProjeto