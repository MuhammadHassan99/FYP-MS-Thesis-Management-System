import React from "react";
// react plugin for creating chartss
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/nextjs-material-dashboard/views/dashboardStyle.js";

function Dashboard() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={true} sm={true} md={true}>
          <Card>
            <CardBody>
              <div>
                <h1>Important Announcements for MS Thesis</h1>
                <p>Dated: 4th October 2021</p>
                <div>
                  <h3>Exam for MS Thesis (CT-5002) Spring 2021</h3>
                  <p>
                    All those students who are currently enrolled in MS Thesis
                    and are expected to complete at least two semesters by the
                    end of Spring 2021 with their necessary thesis work are
                    required to submit the application on prescribed proforma (
                    downloadable from{" "}
                    <a
                      href="https://cct.neduet.edu.pk/downloads"
                      target="_blank"
                    >
                      https://cct.neduet.edu.pk/downloads
                    </a>{" "}
                    ) to the Chairman through their respective supervisors.
                    Deadline is 7th October 2021.
                    <br /> All those students who are expected to complete their
                    MS thesis exam are required to download MS thesis template
                    for final submission from the link{" "}
                    <a
                      href="https://cct.neduet.edu.pk/downloads"
                      target="_blank"
                    >
                      https://cct.neduet.edu.pk/downloads.
                    </a>{" "}
                    <br />
                    The students also have to submit the turnitin report along
                    with the thesis.
                  </p>
                </div>
                <div>
                  <h3>
                    First Semester Evaluation of Currently Enrolled MS Thesis
                    Students
                  </h3>
                  <p>
                    All those students who are expected to complete first
                    semester of MS Thesis by the end of this semester are
                    required to submit Semester Evaluation Report of MS Thesis
                    to their respective supervisors for which the prescribed
                    proforma is available at:{" "}
                    <a
                      href="https://cct.neduet.edu.pk/downloads"
                      target="_blank"
                    >
                      https://cct.neduet.edu.pk/downloads
                    </a>{" "}
                    Deadline is 25th October 2021.{" "}
                  </p>
                </div>
                <div>
                  <h3>
                    New MS Thesis (CT-5002) Proposals for the next semester
                  </h3>
                  <p>
                    Proposal submission deadline: Monday 22nd November 2021. All
                    those students who are willing to register in CT-5002 Thesis
                    are advised to discuss their thesis proposal with any
                    faculty member of the department.
                    <ul>
                      <li>
                        Thesis shall be allowed only to those students having
                        completed twelve credit hours with a minimum 2.75 CGPA.
                        (those who are expecting to complete this requirement in
                        current semester examination result should also apply)
                      </li>
                      <li>
                        Students are advised to carefully read the rules and
                        regulations of the MS Thesis in prospectus (Section
                        6.4), available online at:{" "}
                        <a
                          href="https://www.neduet.edu.pk/postgraduate_admissions"
                          target="_blank"
                        >
                          https://www.neduet.edu.pk/postgraduate_admissions
                        </a>
                      </li>
                      <li>
                        If you find yourself eligible for the Thesis then you
                        should immediately contact one of the faculty members of
                        the department and discuss your research project idea to
                        supervise.
                      </li>
                      <li>
                        Proposal must be according to the template that is
                        available at:{" "}
                        <a
                          href="https://cct.neduet.edu.pk/downloads"
                          target="_blank"
                        >
                          https://cct.neduet.edu.pk/downloads
                        </a>
                      </li>
                    </ul>
                  </p>
                  <h5>Proposal Submission:</h5>
                  <p>
                    Proposals should be submitted to the respective supervisors
                    who will forward it with their <b>comments</b> to the
                    Chairman CSIT for final approval.
                  </p>
                  <h5>Thesis Supervisors</h5>
                  <p>
                    Students are advised to contact and discuss their projects
                    ideas with the following faculty members with respect to
                    their areas of specialisation and research interest:
                  </p>
                  <Card>
                    <CardBody>
                      <Table
                        tableHeaderColor="warning"
                        tableHead={[
                          "Serial No.",
                          "Faculty Member",
                          "Specialisation/Proposed projects",
                        ]}
                        tableData={[
                          [
                            "1",
                            "Prof. Dr. Najmi Ghani Haider",
                            "Machine Learning, Robust Speech Recognition, Image Processing",
                          ],
                          [
                            "2",
                            "Dr. Sh. Muhammad Wahabuddin Usmani",
                            " Software Development Methodologies",
                          ],
                          [
                            "3",
                            "Dr. Najeed Ahmed Khan",
                            "Computer Vision, Image Processing, Artificial Intelligence",
                          ],
                          [
                            "4",
                            "Dr. Muhammad Mubashir Khan",
                            "Cyber Crimes, Cybersecurity, Network Security, Privacy, Blockchain, Quantum Key Distribution, and more …",
                          ],
                          ["5", "Dr. Saman Hina", "Semantics, Data Mining"],
                          [
                            "6",
                            "Dr. Shariq Mahmood Khan",
                            "Internet-of-Things (IoT) Security  Unmanned Aerial Vehicles (UAVs) and Drones  Mobile Phone Security  Blockchain  5G networks performance analysis  The secure and energy efficient data routing in the IoT based networks  To propose secure scheme for the isolation of black hole attack in mobile ad hoc networks  Wireless Sensor Networks: Through Analysis in Healthcare systems  Secure Programming",
                          ],
                          [
                            "7",
                            "Dr. Shehnila Zardari",
                            "Cloud Adoption: A Goal-Oriented Requirements Engineering Approach",
                          ],
                          ["8", "Dr. Raheela Asif", "Educational Data Mining"],
                          [
                            "9",
                            "Dr. Kashif Mehboob Khan",
                            "Online Information Security in Financial Transaction, Blockchain, Distributed Systems",
                          ],
                          [
                            "10",
                            "Dr. Muhammad Faraz Hyder",
                            "Cyber Security and Privacy, Cloud Computing, Network and Information Security",
                          ],
                          [
                            "11",
                            "Dr. Waseemullah",
                            "Image Processing, Databases and Software Engineering",
                          ],
                          [
                            "12",
                            "Dr. Umer Farooq",
                            "Data Science, Machine Learning, Computer Vision, Data Warehousing, Databases",
                          ],
                          [
                            "13",
                            "Dr. Maria Andaleeb Siddiqui",
                            "Machine Learning, Speech Processing",
                          ],
                        ]}
                      />
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <h3>Final Thesis Submission</h3>
                  <p>
                    Final Thesis (hardcopy) along with plagiarism report must be
                    submitted to <b>Dr. Umer Farooq</b> (Assistant Professor,
                    CSIT NEDUET) The recommended template of MS Thesis (in Latex
                    format) is available online at:{" "}
                    <a
                      href="https://www.overleaf.com/read/thskqhskddpy"
                      target={"_blank"}
                    >
                      https://www.overleaf.com/read/thskqhskddpy
                    </a>
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

Dashboard.layout = Admin;

export default Dashboard;
