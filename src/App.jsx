import { useEffect, useState } from "react";
import { Button, Stack, Typography, Box } from "@mui/material";
import { useLazyQuery } from "@apollo/client";
import { GET_USER_DETAILS } from "./query/query";

function App() {
  const [userList, setUserList] = useState([]);

  const [getUserList, { loading, data }] = useLazyQuery(GET_USER_DETAILS, {
    onCompleted(data) {
      setUserList(data?.users?.data);
    },
    onError(error) {
      console.log(error);
    },
  });

  useEffect(() => {
    getUserList({
      variables: {
        page: 1,
        pageSize: 10,
      },
    });
  }, []);

  return (
    <Stack spacing={2}>
      {loading ? (
        <Typography variant="h3">User Loading ...</Typography>
      ) : (
        userList.map((user) => (
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            maxWidth={600}
          >
            <Typography key={user.id}>{user.name}</Typography>
            <Button variant="contained" color="primary">
              Details{" "}
            </Button>
          </Stack>
        ))
      )}
    </Stack>
  );
}

export default App;
