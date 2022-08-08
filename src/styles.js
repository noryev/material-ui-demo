import { makeStyles } from '@material-ui/core/styles';


// you have this theme object available from MaterialUI- learn more!

const useStyles = makeStyles (( theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
        
    },
    icon: {
        marginRight: '20px' ,

    },
    buttons: {
        marginTop: '40px'

    },
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    CardMedia: {
        paddingTop: '56.25%' // 16:9 aspect ratio

    },
    cardContent: {
        flexGrow: 1,

    },
}));

export default useStyles;