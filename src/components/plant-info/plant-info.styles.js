import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';


export const PlantName = styled.h1`
    padding-left: 5px;
    margin-left: 5px;
`;


export const PlantInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 350px;
    align-items: center;
    position: relative;
    padding-left: 5px;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`;

export const ImagesContainer = styled.div`
    width: 40%;
    height: 90%;
    margin-bottom: 5px;
    margin-right: 20px;
    display: block;

    @media screen and (max-width: 800px) {
        margin-bottom: 50px;
    }
`;

export const InfoContainer = styled.div`
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: column;
`;

export const Info = styled.p`
    font-weight: bold;
`;

export const AddButton = styled(CustomButton)`
    width: 60%;
    margin-top: 28px;

    @media screen and (max-width: 800px) {
        display: block;
        min-width: unset;
        padding: 0 10px;
    }
`;

AddButton.displayName = 'AddButton';