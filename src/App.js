import React from 'react'
import styled from 'styled-components'
import { useReactToPrint } from 'react-to-print'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Header, Footer, Avatar, Title, Description, Range } from "./components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
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

  const [skillsCounter, setSkillsCounter] = React.useState(1)
  const [worksCounter, setWorksCounter] = React.useState(1)

  const componentRef = React.useRef()
  const handlePrintClick = useReactToPrint({
      content: () => componentRef.current,
  })

  return (
      <div className="ui-wrapper">
          <Header onClick={handlePrintClick} />

          <div className="ui-content-wrapper">
              <section className="ui-section">
                  <Wrapper>
                      <div className="ui-container" ref={componentRef}>

                          <Row itemsCenter>
                              <Content>
                                  <Title size='3'>Your name</Title>
                                  <Description>Desired role</Description>

                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fa', 'phone']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fa', 'location-dot']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fab', 'github']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fab', 'telegram']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fa', 'envelope']} />
                                      Contact details
                                  </Description>
                                  <Description isPrimary>
                                      <FontAwesomeIcon icon={['fa', 'link']} />
                                      Contact details
                                  </Description>

                              </Content>

                              <Sidebar>
                                  <Avatar />
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
                                      isShowButton
                                      onClick={() => setSkillsCounter(skillsCounter + 1)}
                                      style={{ marginTop: '3.6rem' }}
                                  >
                                      Professional Skills
                                  </Title>

                                  <Description>
                                      {new Array(skillsCounter).fill(1).map((_, i) => (
                                          <Range key={i} />
                                      ))}
                                  </Description>
                              </Content>
                          </Row>

                          <Row>
                              <Content>
                                  <Title
                                      size='3'
                                      isUppercase
                                      isShowButton
                                      onClick={() => setWorksCounter(worksCounter + 1)}
                                      style={{ marginTop: '3.6rem' }}
                                  >
                                      Work experience
                                  </Title>

                                  {new Array(worksCounter).fill(1).map((_, i) => (
                                      <Description key={i}>
                                          {i+1}. Try to list your achievements rather than just job responsibilities)
                                      </Description>
                                  ))}

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
