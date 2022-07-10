import React from 'react'
import styled from 'styled-components'

import { Header, Footer, Avatar, Title, Description } from "./components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`


const App = () => {
  const handleAvatarClick = () => console.log('avatar')
  const handlePrintClick = () => console.log('print')
  return (
      <div className="ui-wrapper">
          <Header onClick={handlePrintClick} />

          <div className="ui-content-wrapper">
              <section className="ui-section">
                  <Wrapper>
                      <div className="ui-container">

                          <Row itemsCenter>
                              <Content>
                                  <Title size='3'>Your name</Title>
                                  <Description>Desired role</Description>

                                  <Description isPrimary>
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      Contact details
                                  </Description>
                              </Content>

                              <Sidebar>
                                  <Avatar onClick={handleAvatarClick} />
                              </Sidebar>
                          </Row>

                          <Row>
                              <Content>
                                  <Title
                                      size='3'
                                      isUppercase
                                      style={{ marginTop: '3.6rem' }}
                                  >
                                      Summary
                                  </Title>

                                  <Description>
                                      3 meaningful sentences, an overview of your career. State your strengths and professional focus.
                                  </Description>
                              </Content>
                          </Row>

                          <Row>
                              <Content>
                                  <Title
                                      size='3'
                                      isUppercase
                                      style={{ marginTop: '3.6rem' }}
                                  >
                                      Professional Skills
                                  </Title>

                                  <Description>
                                      Skill
                                  </Description>
                              </Content>
                          </Row>

                          <Row>
                              <Content>
                                  <Title
                                      size='3'
                                      isUppercase
                                      style={{ marginTop: '3.6rem' }}
                                  >
                                      Work experience
                                  </Title>

                                  <Description>
                                      Description (Try to list your achievements rather than just job responsibilities)
                                  </Description>
                              </Content>
                          </Row>
                      </div>
                  </Wrapper>
              </section>
          </div>

          <Footer />
      </div>
  );
}

export default App;
