import React, {useState, useEffect} from 'react';
import {Box, Typography, CircularProgress} from '@material-ui/core';
import {Save} from '@material-ui/icons';
import {green} from '@material-ui/core/colors';

export default function ProgramSaveIndicator() {
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    let timeout;
    const interval = setInterval(() => {
      setIsSaving(true);
      timeout = setTimeout(() => setIsSaving(false), 1_000);
    }, 10_000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box display="flex" alignItems="center" justifyContent="center" pr={1}>
      <Box pr={0.5}>
        {isSaving ? (
          <CircularProgress size={16} thickness={5} />
        ) : (
          <Save style={{color: green[500]}} />
        )}
      </Box>

      <Typography style={{opacity: 0.54}}>
        {isSaving ? 'saving' : 'saved'}
      </Typography>
    </Box>
  );
}
