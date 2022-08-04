import { makeStyles } from '@material-ui/core/styles';

// you have this theme object available from MaterialUI- learn more!

const useStyles = makeStyles (( theme ) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
        
    }

}));

export default useStyles;