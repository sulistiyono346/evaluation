/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDSelectVariant from "components/MDSelect";

// Images
import team2 from "assets/images/student.jpg";
import { useMaterialUIController, setStudents, setActiveButtonSave } from "context";

export default function data() {
  const [controller, dispatch] = useMaterialUIController();
  const { students } = controller;

  const handleOnChange = ({ id, type, value }) => {
    setActiveButtonSave(dispatch, true);
    const result = students.map((val) => (val.id === id ? { ...val, [type]: value } : val));
    setStudents(dispatch, result);
  };
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const generateData = () => {
    return students?.map((val) => ({
      author: <Author image={team2} name={val.name} email={`${val.name}@mail.id`} />,
      evaluation1: (
        <MDSelectVariant
          value={val.evaluation1}
          handleOnChange={(cb) => handleOnChange({ id: val.id, type: "evaluation1", value: cb })}
        />
      ),
      evaluation2: (
        <MDBox ml={-1}>
          <MDSelectVariant
            value={val.evaluation2}
            handleOnChange={(cb) => handleOnChange({ id: val.id, type: "evaluation2", value: cb })}
          />
        </MDBox>
      ),
      evaluation3: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <MDSelectVariant
            value={val.evaluation3}
            handleOnChange={(cb) => handleOnChange({ id: val.id, type: "evaluation3", value: cb })}
          />
        </MDTypography>
      ),
      evaluation4: (
        <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          <MDSelectVariant
            value={val.evaluation4}
            handleOnChange={(cb) => handleOnChange({ id: val.id, type: "evaluation4", value: cb })}
          />
        </MDTypography>
      ),
    }));
  };

  return {
    columns: [
      { Header: "Name", accessor: "author", width: "25%", align: "left" },
      { Header: "aspects of student assessment 1", accessor: "evaluation1", align: "center" },
      { Header: "aspects of student assessment 2", accessor: "evaluation2", align: "center" },
      { Header: "aspects of student assessment 3", accessor: "evaluation3", align: "center" },
      { Header: "aspects of student assessment 4", accessor: "evaluation4", align: "center" },
    ],

    rows: generateData(),
  };
}
