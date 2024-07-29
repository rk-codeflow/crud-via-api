import { useEffect, useState } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_DETAILS } from "./query/query";
import { Routes, Route } from "react-router-dom";
import UserDetails from "./components/UserDetails";
import { Link } from "react-router-dom";

function App() {
  const [userList, setUserList] = useState([]);

  const [getUserList, { loading, data }] = useLazyQuery(GET_USER_DETAILS, {
    onCompleted(data) {
      setUserList(data?.users?.data);
      console.log("== USer", data);
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    getUserList({});
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Stack spacing={2}>
              {loading ? (
                <Typography variant="h3">User Loading ...</Typography>
              ) : (
                userList.map((user) => (
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    maxWidth={600}
                    key={user.id}
                  >
                    <Typography>{user.name}</Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={`/user-details/${user.id}`}
                    >
                      Details
                    </Button>
                  </Stack>
                ))
              )}
            </Stack>
          }
        />
        <Route path="/user-details/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
