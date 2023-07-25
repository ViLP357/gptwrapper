import React, { useState } from 'react'
import { Box, Typography, Button, Modal } from '@mui/material'

import CreateAccessGroup from './CreateAccessGroup'
import AccessGroupTable from './AccessGroupTable'

const Admin = () => {
  const [createFormOpen, setCreateFormOpen] = useState(false)

  return (
    <Box
    sx={{ margin: '0 auto', width: '90%', padding: '5%' }}
  >
    <Typography mb={2} variant="h3">Admin</Typography>

    <AccessGroupTable />

    <Button sx={{ p: 2 }} variant="contained" onClick={() => setCreateFormOpen(true)}>
      Create new access group
    </Button>

    <Modal
      open={createFormOpen}
      onClose={() => setCreateFormOpen(false)}
    >
      <CreateAccessGroup setFormOpen={setCreateFormOpen} />
    </Modal>
  </Box>
  )
}

export default Admin
