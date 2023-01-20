import Logout from "components/User/UserCard/Logout/Logout";
import UserPhoto from "components/User/UserCard/UserPhoto/UserPhoto";
import { Container, InfoUser, LogoutBox, PetDiv, Title, UserDiv, Wrapper } from "./UserPage.styled";



const UserPage = () => {
    return (
        <>
        <Container>
            <Wrapper>
                <UserDiv>
                        <Title>My information:</Title>
                        <InfoUser>
                            <UserPhoto />
                            <LogoutBox>
                                <Logout />
                            </LogoutBox>
                        </InfoUser>
                    </UserDiv>
                    <PetDiv>
                        {/* <PetsData/> */}
                    </PetDiv>
            </Wrapper>
        </Container>
        </>
    )
}

export default UserPage;