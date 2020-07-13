import React from 'react';
import 'typeface-roboto';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import {Avatar, Tooltip, withStyles, Typography} from '@material-ui/core';
import {grey} from '@material-ui/core/colors';

const users = [
  {name: 'Kelly Green', abbr: 'KG'},
  {name: 'Amanda Bachu', abbr: 'AB'},
  {name: 'Ash Maraga', abbr: 'AM'},
  {name: 'Steve Jim', abbr: 'SJ'},
  {name: 'Bob Userson', abbr: 'BU'},
];

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
    padding: 16,
  },
}))(Tooltip);

export default function Multiuser() {
  return (
    <>
      <AvatarGroup>
        {users.map(({colors, name, abbr}) => (
          <LightTooltip
            key={colors}
            title={<Typography>{name}</Typography>}
            placement="bottom"
          >
            <Avatar
              style={{
                backgroundColor: grey[400],
              }}
            >
              {abbr}
            </Avatar>
          </LightTooltip>
        ))}
      </AvatarGroup>
    </>
  );
}
