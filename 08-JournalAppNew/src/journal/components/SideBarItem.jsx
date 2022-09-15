import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'

export const SideBarItem = ({ title, body, id }) => {

    const newTittle = useMemo(() => {
         return title.length > 17
            ? title.substring(0,17) + '...'
            : title;
        }, [title])

    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid container>
                    <ListItemText primary={title} />
                    <ListItemText secondary={body} />
                </Grid>
            </ListItemButton>
        </ListItem>
    )
}
