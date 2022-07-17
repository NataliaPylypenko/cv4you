import React from 'react'
import styled from 'styled-components'
import './App.scss'

import { useReactToPrint } from 'react-to-print'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPhone, faLocationDot, faEnvelope, faLink, faPrint } from '@fortawesome/free-solid-svg-icons'
import { Header, Footer, Avatar, Title, Description, Range, Period } from "./components";

const Wrapper = styled.div`
  max-width: 735px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #fff;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 4px 10px rgba(0, 117, 255, 0.07), 0px 4px 20px rgba(0, 117, 255, 0.1);
  border-radius: 12px;
`
const Container = styled.div`
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`
const Row = styled.div`
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
                                  <div className="cv-section__holder">
                                      <Title size='1'> Your name </Title>

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
                              <div className="cv-section__col">
                                  <Title
                                      size='2'
                                      isUppercase
                                      isLine
                                  >
                                      Summary
                                  </Title>

                                  <Description>
                                      3 meaningful sentences, an overview of your career. State your strengths and professional focus.
                                  </Description>
                              </div>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>
                              <div className="cv-section__col">
                                  <Title
                                      size='2'
                                      isUppercase
                                      isLine
                                  >
                                      Professional Skills
                                  </Title>

                                  <Description>
                                      {new Array(skillsCounter).fill(1).map((_, i) => (
                                          <Range key={i} />
                                      ))}
                                  </Description>
                              </div>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>
                              <div className="cv-section__col">
                                  <Title
                                      size='2'
                                      isUppercase
                                      isLine
                                  >
                                      Work experience
                                  </Title>

                                  <div className="d-flex w-100">
                                      <div className="cv-data">
                                          <Description className="cv-company">Company name</Description>
                                          <Description>Position</Description>
                                          <Period>01/2017 - 07/2022</Period>
                                      </div>
                                      <Description className="w-100">
                                          Try to list your achievements rather than just job responsibilities
                                      </Description>
                                  </div>
                              </div>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>
                              <div className="cv-section__col">
                                  <Title
                                      size='2'
                                      isUppercase
                                      isLine
                                  >
                                      Education
                                  </Title>
                                  <div className="d-flex w-100">
                                      <div className="cv-data">
                                          <Description className="cv-company">School / University</Description>
                                          <Period>01/2017 - 07/2022</Period>
                                      </div>
                                      <Description className="w-100">
                                          Degree and field of study
                                      </Description>
                                  </div>
                              </div>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>
                              <div className="cv-section__col">
                                  <Title
                                      size='2'
                                      isUppercase
                                      isLine
                                  >
                                      Certificates
                                  </Title>
                                  <div className="d-flex w-100">
                                      <div className="cv-data">
                                          <Period>2022</Period>
                                      </div>
                                      <Description className="w-100">
                                          List professional growth programs (courses, certificates) and awards here
                                      </Description>
                                  </div>
                              </div>
                          </Row>
                      </Container>
                  </section>

                  <section className="cv-section">
                      <Container>
                          <Row>
                              <div className="cv-section__col">
                                  <Title
                                      size='2'
                                      isUppercase
                                      isLine
                                  >
                                      About
                                  </Title>
                                  <div className="d-flex w-100">
                                      <div className="cv-data">
                                          <Description className="cv-company">Work preferences</Description>
                                      </div>
                                      <Description className="w-100">
                                          A few words about tasks you enjoy doing the most and people you would love to work with.
                                      </Description>
                                  </div>
                              </div>
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
