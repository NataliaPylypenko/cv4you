import React from 'react'
import styled from 'styled-components'
import './App.scss'

import { useReactToPrint } from 'react-to-print'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faLocationDot, faEnvelope, faLink, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Header, Footer, Avatar, Title, Description, Range } from "./components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 0px 4px 10px rgba(0, 117, 255, 0.07), 0px 4px 20px rgba(0, 117, 255, 0.1);
  border-radius: 1%;
`
const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`
const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const App = () => {

  const [skillsCounter, setSkillsCounter] = React.useState(1)
  const [worksCounter, setWorksCounter] = React.useState(1)

  const componentRef = React.useRef()
  const handlePrintClick = useReactToPrint({
      content: () => componentRef.current,
  })

  library.add(fab, faPhone, faLocationDot, faEnvelope, faLink, faPrint)

  return (
      <div className="cv-wrapper">
          <Header onClick={handlePrintClick} />
          <Wrapper>
              <div ref={componentRef}>

                  <section className="cv-section">
                      <Container>
                          <Row>
                              <div className="cv-section__head">
                                  <div className="cv-section__header">
                                      <Description className="cv-title-3">Your name</Description>

                                      <Description className="cv-subtitle">Desired role</Description>

                                      <div className="cv-section__contacts">
                                          <div className="cv-section__contacts-item">
                                              <Description>
                                                  <FontAwesomeIcon icon={['fa', 'phone']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description>
                                                  <FontAwesomeIcon icon={['fa', 'location-dot']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description>
                                                  <FontAwesomeIcon icon={['fab', 'facebook-f']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description>
                                                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description isPrimary>
                                                  <FontAwesomeIcon icon={['fab', 'github']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description isPrimary>
                                                  <FontAwesomeIcon icon={['fab', 'instagram']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description isPrimary>
                                                  <FontAwesomeIcon icon={['fab', 'telegram']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description isPrimary>
                                                  <FontAwesomeIcon icon={['fa', 'envelope']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                          <div className="cv-section__contacts-item">
                                              <Description isPrimary>
                                                  <FontAwesomeIcon icon={['fa', 'link']} className="contacts-icon" />
                                                  Contact details
                                              </Description>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="cv-section__cropper">
                                      <Avatar />
                                  </div>
                              </div>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>
                                  <Title
                                      size='2'
                                      isUppercase
                                  >
                                      Summary
                                  </Title>

                                  <Description>
                                      3 meaningful sentences, an overview of your career. State your strengths and professional focus.
                                  </Description>

                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>

                                  <Title
                                      size='2'
                                      isUppercase
                                      isShowButton
                                      onClick={() => setSkillsCounter(skillsCounter + 1)}
                                  >
                                      Professional Skills
                                  </Title>

                                  <Description>
                                      {new Array(skillsCounter).fill(1).map((_, i) => (
                                          <Range key={i} />
                                      ))}
                                  </Description>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>

                                  <Title
                                      size='2'
                                      isUppercase
                                      isShowButton
                                      onClick={() => setWorksCounter(worksCounter + 1)}
                                  >
                                      Work experience
                                  </Title>

                                  {new Array(worksCounter).fill(1).map((_, i) => (
                                      <Description key={i}>
                                          {i+1}. Try to list your achievements rather than just job responsibilities)
                                      </Description>
                                  ))}


                          </Row>
                      </Container>
                  </section>

              </div>
          </Wrapper>

          <Footer />
      </div>
  );
}

export default App;
