import * as React from 'react';
import moment from 'moment';
import classnames from 'classnames';
import { event } from "../imports/analitics";

import { makeStyles, Typography, Paper, Grid, useMediaQuery, Theme, Hidden, IconButton, Menu, Button, Popover, Fab, Dialog, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { yellow, red } from '@material-ui/core/colors';

import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import ReactResizeDetector from 'react-resize-detector';
import Tilt from 'react-tilt';
import TextBackComponent from "../imports/textback";

import data from '../imports/data';
import { Parallax, Background } from 'react-parallax';
import Slider from "react-slick";
import { useTheme } from '@material-ui/styles';

import InfiniteCalendar, {
  Calendar,
  withRange,
} from 'react-infinite-calendar';
import { withDefaultProps } from 'react-infinite-calendar/lib/Calendar';

import School from '@material-ui/icons/School';
import Done from '@material-ui/icons/Done';
import Train from '@material-ui/icons/Train';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import FiberManualRecord from '@material-ui/icons/FiberManualRecord';
import FormatQuote from '@material-ui/icons/FormatQuote';
import Phone from '@material-ui/icons/Phone';
import CalendarToday from '@material-ui/icons/CalendarToday';

import '../imports/i18n';
import { List, ListItem } from '@material-ui/core';
import { VerticalForm } from '../imports/forms';

export const wrapParallaxRender = (callback) => (perc) => {
  return callback(!process.browser ? 0 : perc);
};

export function useInterval(callback, delay) {
  const savedCallback: any = React.useRef();

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null)
    {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const useStyle = makeStyles(() => ({
  container: {
    paddingLeft: 32,
    paddingRight: 32,
  },
  header: {
    width: '100%',
    minHeight: '50vh',
    backgroundColor: data.darkColor,
  },
  headerContent: {
    position: 'relative',
    zIndex: 1,
    paddingTop: 64,
    paddingBottom: 128,
  },
  heading: {
    height: 5,
    background: `${data.darkColor}`,
    position: 'relative',
    textAlign: 'center',
  },
  headingTitle: {
    display: 'inline-block',
    position: 'relative',
    zIndex: 2,
    marginTop: '-12%',
  },
  aboutMeBackground: {
    background: `${data.darkColor}`,
    width: `100%`,
    overflow: 'hidden',
  },
  aboutMeContainer: {
    // paddingTop: 32,
    // paddingBottom: 32,
  },
  aboutMePhotoItem: {
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  myComment: {
    paddingTop: 100,
    paddingBottom: 150,
    backgroundImage: `url(${data.myComment.photo})`,
    backgroundAttachment: 'fixed',
    backgroundSize: '140%',
    backgroundPosition: 'right center',
  },
  slickContainer: {
    '& .slick-slider': {
      height: 300,
      overflowY: 'hidden',
    },
  },
  map: {
    position: 'relative',
    overflow: 'hidden',
  },
  mapImage: {
    width: '100%',
  },
  mapIconButton: {
    backgroundColor: '#00000091 !important',
    position: 'relative',
    right: '50%',
    bottom: '50%',
  },
}));

const InfiniteCalendarWrapped = withRange(withDefaultProps(Calendar));

const start = new Date(2019, 8, 10, 18, 30);
const end = new Date(2019, 8, 10, 21);

export const CalendarButtonContent = ({ style }) => {
  const [time, setTime] = React.useState<any>(moment(start).format('Do MMMM HH:mm'));
  useInterval(() => {
    setTime(moment(start).format('Do MMMM HH:mm'));
  }, 3000)
  return <>
    <CalendarToday style={{ marginRight: 6, ...style }} color='secondary' /> {time}
  </>;
};

export const Container = ({ children = null, className = [], ...props }) => {
  const classes = useStyle();
  return <div className={classnames(className, classes.container)} {...props}>{children}</div>;
};

export const Header = ({ children = null, className = [], ...props }) => {
  const classes = useStyle();
  return <Container className={classnames(className, classes.header)} {...props}>
    {children}
  </Container>;
};

export const HeaderContent = ({ DateButton, className = [], ...props }) => {
  const classes = useStyle();
  const theme = useTheme<Theme>();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return <div className={classnames(className, classes.headerContent)} {...props}>
    <div style={{ float: 'right', width: isMdUp ? 'initial' : '100%', textAlign: 'center', paddingBottom: 64 }}>
      <img src={data.vshsdt_logo} style={{ width: isMdUp ? 300 : 200 }}/>
      <br/>
      <Typography variant="h5" style={{ color: '#d1b56c' }}>
        Высшая Школа Стилистики<br/>Дизайна и Технологий
      </Typography>
      <Typography variant="body2" style={{ color: '#d1b56c', fontSize: 14 }}>
        Российское академическое онлайн образование
      </Typography>
    </div>
    {data.title.map((title, i) => <Typography key={i} variant={isSmUp ? 'h2' : 'h3'} style={{ color: 'white' }}>{title}</Typography>)}
    <Typography variant="body2" style={{ color: 'white' }}>Для студентов ВШСДТ и всех желающих</Typography>
    <Typography variant="h4" style={{ color: 'white', marginTop: 64 }}>{data.description}</Typography>
    <Typography variant="h4" style={{ color: 'white' }}>{data.definition}</Typography>

    <Typography variant="body2" style={{ color: 'white', marginTop: 64 }}>
      {data.fromRang}
    </Typography>
    <Typography variant="body2" style={{ color: 'white' }}>
      {data.vshsdt.fullOf}
    </Typography>

    <Hidden implementation="css" smUp>
      <div style={{ marginTop: 16 }}><DateButton style={{ color: 'white', fontSize: 20 }}/></div>
      <Typography variant="body2" style={{ color: 'white', marginTop: 16 }}>
        <b>Метро</b> Алексеевская
      </Typography>
    </Hidden>
  </div>;
};

export const Heading = ({ children = null, className = [], ...props }) => {
  const classes = useStyle();
  return <div className={classnames(className, classes.heading)} {...props}>{children}</div>;
};

export const HeadingTitle = ({ children = null, className = [], style = {}, ...props }) => {
  const classes = useStyle();
  const theme = useTheme<Theme>();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
  
  return <div className={classnames(className, classes.headingTitle)}>
    <Paper square elevation={12} style={{
      padding: 34,
      ...style,
    }} {...props}>
      <Typography variant={isSmUp ? 'h4' : 'h5'}>{children}</Typography>
    </Paper>
  </div>;
};

export const Publications = ({}) => {
  return <div>
    <Container>
      <Grid container justify="center" alignItems="center" style={{ marginTop: 64 }}>
        {data.publications.logos.map((logo, i) => (
          <Grid key={i} item xs={4} sm={3}>
            <Flip top delay={100}>
              {logo}
            </Flip>
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
};

export const Partners = ({}) => {
  return <div>
    <Background>
      <div></div>
    </Background>
    <Container>
      <Grid container justify="space-around" alignItems="center" style={{ marginTop: 128, marginBottom: 64 }}>
        {data.partners.logos.map((logo, i) => (
          <Grid key={i} item xs={6} sm={3}>
            <Flip top delay={100}>
              {logo}
            </Flip>
          </Grid>
        ))}
      </Grid>
    </Container>
  </div>
};

export const AboutMe = ({}) => {
  const [size, setSize] = React.useState({ width: 0, height: 0 });
  const classes = useStyle();
  const theme = useTheme<Theme>();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const photoItem = <Grid item xs={12} md={4} lg={4} style={{
    ...(isMdUp ? {
      // paddingRight: 32,
      // paddingLeft: 32,
    } : {
      paddingTop: 32,
      paddingBottom: 64,
    })
  }} className={classes.aboutMePhotoItem}>
    <Hidden implementation="css" smDown>
      <img src={data.aboutMe.photo2} style={{
        maxWidth: '100%',
        width: '100%',
        padding: isMdUp ? '0 16px' : 0,
        marginBottom: isMdUp ? -10 : 0,
      }}/>
    </Hidden>
    <Hidden implementation="css" mdUp>
      <img src={data.aboutMe.photo1} style={{
        maxWidth: '100%',
        width: '100%',
        padding: isMdUp ? '0 16px' : 0,
        marginBottom: isMdUp ? -10 : 0,
      }}/>
    </Hidden>
  </Grid>;

  const aboutItem = <Grid item xs={12} md={8} lg={7} style={{ paddingBottom: isMdUp ? 64 : 0 }}>
    <Typography style={{ marginBottom: 16, paddingTop: 32, paddingBottom: 12 }} variant="h3">{data.aboutMe.name}</Typography>
    <Typography style={{ }} variant="h4">{data.aboutMe.exp}</Typography>
    {data.aboutMe.exps.map((exp, i) => {
      return <Typography key={i} style={{ }} variant="body2">{exp}</Typography>
    })}
    <Typography style={{ }} variant="h4">{data.aboutMe.edu}</Typography>
    {data.aboutMe.edus.map((edu, i) => {
      return <Typography key={i} style={{ }} variant="body2">{edu}</Typography>
    })}
  </Grid>;

  const body = <Container>
    <ReactResizeDetector handleWidth handleHeight onResize={(width, height) => {
      setSize({ width, height });
    }}/>
    <Hidden implementation="css" smDown>
      <Grid container alignItems="center" justify="center" classes={{ container: classes.aboutMeContainer }}>
        {photoItem}
        {aboutItem}
      </Grid>
    </Hidden>
    <Hidden implementation="css" mdUp>
      <Grid container alignItems="center" justify="center" classes={{ container: classes.aboutMeContainer }}>
        {aboutItem}
        {photoItem}
      </Grid>
    </Hidden>
  </Container>;
    
  return isSmDown || !process.browser ? <div
    className={classes.aboutMeBackground}
    style={{
      height: 'initial',
      backgroundColor: '#bf9b55',
      backgroundImage: 'linear-gradient(150deg, #ebe299 0%, rgb(150, 116, 78) 100%)',
    }}
  >
    {body}
  </div> : <Parallax
    strangth={300}
    renderLayer={wrapParallaxRender(perc => {
      const p = perc > 0.2 ? (perc - 0.2) : 0;
      return <div
        className={classes.aboutMeBackground}
        style={{
          height: isMdUp ? `${p * 200}vh` : 'initial',
          maxHeight: size.height,
          backgroundColor: '#bf9b55',
          backgroundImage: 'linear-gradient(150deg, #ebe299 0%, rgb(150, 116, 78) 100%)',
        }}
      >
        {body}
      </div>;
    })}
  >
    <Background>
      <div></div>
    </Background>
  </Parallax>;
};

export const Banner = ({ children, ...props }) => {
  const [hovered, setHovered] = React.useState(false);
  const theme = useTheme<Theme>();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  return <Tilt
    disabled={isSmDown}
    {...props}
    options={isSmDown ? { max: 0, scale: 1 } : { max: 15, scale: 1.01, ...props.options }}
    style={{ height: '100%', width: '100%', boxSizing: 'border-box', ...props.style }}
  >
    <Paper
      square
      style={{
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
      elevation={hovered ? 8 : 3}
      onMouseEnter={() => !isSmDown && setHovered(true)}
      onMouseLeave={() => !isSmDown && setHovered(false)}
    >
      <div style={{
        boxSizing: 'border-box',
        padding: 38,
        height: '100%',
        width: '100%',
        transition: 'all 1s ease',
        boxShadow: hovered ? `inset 0 0 0 10px white, inset 0 0 0 15px ${data.darkColor}` : '',
      }}>
        {children}
      </div>
    </Paper>
  </Tilt>;
};

export const MyComment = ({}) => {
  const classes = useStyle();
  return <>
    <Hidden implementation="css" xsDown>
      <div className={classes.myComment}>
        <Grid container style={{ height: '100%', width: '100%' }} alignItems="center" justify="center">
          <Grid item xs={12} sm={10} md={6} lg={6}>
            <Banner>
              <Typography variant="body2">
                {data.myComment.body}
              </Typography>
              <div style={{
                textAlign: 'center', boxShadow: 'inset 0 18px 0 0 white, inset 0 20px 0 0 black',
                position: 'relative', top: 20,
              }}>
                <div style={{ display: 'inline-block', borderRadius: '50%', background: 'white', padding: '0 16px' }}>
                  <FormatQuote style={{ fontSize: 40 }}/>
                </div>
              </div>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={8}>
                  <Typography variant="body2">
                    {data.myComment.me}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src={data.myComment.sign} style={{ width: '100%', marginTop: 0 }}/>
                </Grid>
              </Grid>
            </Banner>
          </Grid>
        </Grid>
      </div>
    </Hidden>
    <Hidden implementation="css" smUp>
      <div className={classes.myComment} style={{ height: 300 }}>
      </div>
      <Paper square style={{ padding: 32, paddingBottom: 84 }}>
        <Typography variant="body2">
          {data.myComment.body}
        </Typography>
        <div style={{
          textAlign: 'center', boxShadow: 'inset 0 18px 0 0 white, inset 0 20px 0 0 black',
          position: 'relative', top: 20,
        }}>
          <div style={{ display: 'inline-block', borderRadius: '50%', background: 'white', padding: '0 16px' }}>
            <FormatQuote style={{ fontSize: 40 }}/>
          </div>
        </div>
        <Grid container justify="center" alignItems="center" style={{ marginTop: 16 }}>
          <Grid item xs={8}>
            <Typography variant="body2">
              {data.myComment.me}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <img src={data.myComment.sign} style={{ width: '100%', marginTop: 32 }}/>
          </Grid>
        </Grid>
      </Paper>
    </Hidden>
  </>;
};

export const PrevArrow = ({ className, style, onClick }: any) => {
  return <IconButton style={{
    zIndex: 1,
    position: 'absolute',
    left: 0,
    top: '43%',
    background: '#000000a8',
    padding: 7,
    margin: 16,
    ...style,
  }} onClick={onClick} className={className}>
    <ChevronLeft fontSize="large" style={{ color: 'white' }}/>
  </IconButton>;
};

export const NextArrow = ({ className, style, onClick }: any) => {
  return <IconButton style={{
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: '43%',
    background: '#000000a8',
    padding: 7,
    margin: 16,
    ...style,
  }} onClick={onClick} className={className}>
    <ChevronRight fontSize="large" style={{ color: 'white' }}/>
  </IconButton>;
};

export const ForWhoPhotoLine = ({}) => {
  const classes = useStyle();

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: false,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
  };

  return <div className={classes.slickContainer}>
    <Slider {...settings}>
      {data.forWho.images.map((image, i) => {
        return <div key={i} style={{ height: 300 }}><img src={image} style={{ height: 300 }}/></div>;
      })}
    </Slider>
  </div>;
};

export const ForWho = ({}) => {
  const theme = useTheme<Theme>();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  if (isSmDown) {
    return <Container style={{ position: 'relative', zIndex: 5 }}>
      <Grid container justify="space-around" alignItems="center" style={{ paddingTop:64, paddingBottom: 64 }}>
        <Grid item xs={12} sm={10}>
          <List>
            {data.forWho.variants.map((variant, i) => (
              <ListItem key={i}>
                <FiberManualRecord/>
                <div style={{ paddingLeft: 16 }}>
                  {variant}
                </div>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>;
  }

  return <Parallax
    bgImage={data.forWho.bgImage}
    strangth={400}
    blur={{ min: 0, max: 10 }}
    renderLayer={wrapParallaxRender(perc => {
      return <div style={{
        zIndex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        background: `rgba(255, 255, 255, ${(perc - 0.15) * 1.2})`,
      }}></div>;
    })}
  >
    <Container style={{ position: 'relative', zIndex: 5 }}>
      <Grid container justify="space-around" alignItems="center" style={{ paddingTop: 64, paddingBottom: 64 }}>
        {data.forWho.variants.map((variant, i) => (
          <Grid key={i} item xs={12} sm={10} style={{ paddingBottom: 16 }}>
            {variant}
          </Grid>
        ))}
      </Grid>
    </Container>
  </Parallax>;
};

export const Programm = ({}) => {
  const classes = useStyle();
  const theme = useTheme<Theme>();
  const [open, setOpen] = React.useState(false);
  const [delay, setDelay] = React.useState(0);

  const aboutItem = <Grid item xs={12} md={6} lg={5}>
    <Typography style={{ }} align="justify" variant="body2">{data.programm.body}</Typography>
  </Grid>;

  return <div
    className={classes.aboutMeBackground}
    style={{
      backgroundColor: '#bf9b55',
      backgroundImage: 'linear-gradient(150deg, #ebe299 0%, rgb(150, 116, 78) 100%)',
    }}
  >
    <Dialog
      open={open}
      onClose={() => {
        event('form-close');
        setOpen(false);
      }}
    >
      <div style={{
        background: 'linear-gradient(150deg, rgb(235, 226, 153) 0%, rgb(150, 116, 78) 100%)',
        maxWidth: 377,
      }}>
        {delay > 0
        ? <div style={{
          textAlign: 'center',
          padding: 32,
        }}>
          <Done fontSize="large" style={{ fontSize: 30 }}/>
          <Typography variant="h5">Отправлено</Typography>
        </div>
        : <VerticalForm onDone={() => {
            event('thankyou');
            setDelay(5);
            const interval = setInterval(() => {
              if (!(delay)) {
                setOpen(false);
                clearInterval(interval);
                setTimeout(() => setDelay(0), 1000);
              } else {
                setDelay(delay - 1);
              }
            }, 1000);
          }}/>
        }
      </div>
    </Dialog>
    <Container style={{ paddingTop: 64, paddingBottom: 120 }}>
      <Grid container alignItems="center" justify="center" spacing={6}>
        <Grid item xs={12}>
          <Typography style={{ textAlign: 'center', marginBottom: 16, paddingTop: 12, paddingBottom: 12 }} variant="h3">{data.programm.title}</Typography>
        </Grid>
        {aboutItem}
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Button variant="contained" size="large" style={{
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
            background: 'linear-gradient(150deg, rgb(235, 226, 153) 0%, rgb(206, 188, 128) 100%)',
            borderRadius: 150,
            // border: '2px solid black',
          }} onClick={() => {
            setOpen(true);
            event('form-open');
          }}>
            ПРИНЯТЬ УЧАСТИЕ В ЛЕКЦИИ
          </Button>
        </Grid>
      </Grid>
    </Container>
  </div>;
};

export const Rules = ({}) => {
  const classes = useStyle();
  const theme = useTheme<Theme>();

  const stepsItem = <Grid item xs={12} style={{ paddingTop: 32 }}>
    <Hidden implementation="css" smUp>
      <List>
      {data.rules.steps.map((step, i) => (
        <ListItem key={i}>
          <Done fontSize="large" style={{ color: 'white', marginRight: 16 }}/><Typography style={{ fontSize: '1.3em', borderBottom: data.rules.steps.length - 1 === i ? '' : '3px solid white', color: '#fff', paddingTop: 16, paddingBottom: 16 }} variant="body2">{step}</Typography>
        </ListItem>
      ))}
      </List>
    </Hidden>
    <Hidden implementation="css" xsDown>
      <Grid container alignItems="center" justify="center">
        {data.rules.steps.map((step, i) => (
          <Grid key={i} item sm={10} md={4} style={{ background: `rgba(255, 255, 255, 0.05)`, margin: 32, padding: 32 }}>
            <Typography style={{ fontSize: '1.3em', borderBottom: '3px solid white', color: '#fff', paddingBottom: 16 }} variant="body2">{step}</Typography>
          </Grid>
        ))}
      </Grid>
    </Hidden>
  </Grid>;

  return <div
    className={classes.aboutMeBackground}
  >
    <Container style={{ paddingTop: 64, paddingBottom: 64 }}>
      <Grid container alignItems="center" justify="center" spacing={6}>
        <Grid item xs={12}>
          <Typography style={{ textAlign: 'center', color: '#fff', paddingTop: 12 }} variant="h3">{data.rules.title}</Typography>
        </Grid>
        {stepsItem}
      </Grid>
    </Container>
  </div>;
};

export const Map = ({}) => {
  const classes = useStyle();
  const theme = useTheme<Theme>();
  
  return <div className={classes.map}>
    <img src={data.map.image} className={classes.mapImage}/>
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
    }}>
      <div style={{
        position: 'absolute',
        left: 'calc(-8% - 30px)',
        top: 'calc(-26% - 30px)',
      }}>
        <IconButton className={classes.mapIconButton}>
          <School style={{ color: yellow[500] }} fontSize="large"/>
        </IconButton>
      </div>
      <div style={{
        position: 'absolute',
        left: 'calc(7% - 30px)',
        top: 'calc(30% - 30px)',
      }}>
        <IconButton className={classes.mapIconButton}>
          <Train style={{ color: red[500] }} fontSize="large"/>
        </IconButton>
      </div>
    </div>
  </div>;
};

export default () => {
  const classes = useStyle();
  const theme = useTheme<Theme>();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

  const [selected, setSelected] = React.useState<any>({
    start,
    end
  });

  const [calendarOpen, setCalendarOpen] = React.useState<any>(null);

  const DateButton = (props) => <Button
    variant="outlined"
    style={{ padding: 6, ...props.style }}
    onClick={event => {
      setCalendarOpen(event.currentTarget);
    }}
    {...props}
  >
    <CalendarButtonContent style={props.style} />
  </Button>;

  const popoverCalendar = <Popover
    open={!!calendarOpen}
    anchorEl={calendarOpen}
    onClose={() => setCalendarOpen(null)}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'left',
    }}
  >
    <InfiniteCalendar
      Component={InfiniteCalendarWrapped}
      selected={selected}
      onSelect={() => { }}
      displayOptions={{
        showHeader: false
      }}
      theme={{
        accentColor: '#000000',
        floatingNav: {
          background: '#000000',
          chevron: '#FFA726',
          color: '#FFF',
        },
        headerColor: '#000000',
        selectionColor: '#000000',
        textColor: {
          active: '#FFF',
          default: '#333',
        },
        todayColor: '#000000',
        weekdayColor: '#000000',
      }}
      width={350}
      height={400}
      rowHeight={50}
      locale={{
        locale: require('date-fns/locale/ru'),
        headerFormat: 'dddd, D MMM',
        weekdays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        blank: 'Пусто',
        todayLabel: {
          long: 'Сегодня',
          short: 'Сег.'
        }
      }}
    />
  </Popover>;

  return <>
    {popoverCalendar}
    <div style={{
      position: 'fixed',
      zIndex: 10,
      bottom: 0,
      top: 'initial',
      width: '100%',
      height: 'auto',
      background: '#ffffff',
      boxShadow: `rgba(0, 0, 0, 0.1) 0px -1px 8px 0px, rgba(0, 0, 0, 0.07) 0px -3px 4px 0px, rgba(0, 0, 0, 0.06) 0px -3px 3px -2px`,
    }}>
      <Grid container justify="space-between" alignItems="center" style={{
        boxSizing: 'border-box',
        padding: 5,
        transition: 'padding 1s ease',
        textAlign: 'center',
      }}>
        <Hidden xsDown>
          <Grid item xs>
            <DateButton/>
          </Grid>
          <Grid item xs style={{ position: 'relative' }}>
            <Typography variant="h4">
              #ВШСДТ
            </Typography>
          </Grid>
          <Grid item xs>
            +7 985 427-12-56
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Fab
            color="secondary"
            href="tel:+7 985 427-12-56"
            size="small"
            style={{
              position: 'absolute',
              bottom: 7,
              left: 'calc(50% - 20px)',
              transition: 'all 0.5s ease',
              borderRadius: '50%',
              color: '#fff',
              backgroundColor: '#f50057',
            }}
          >
            <Phone />
          </Fab>
          <Grid item style={{ position: 'relative' }}>
            <Typography variant="h4" style={{ textAlign: 'center' }}>
              #ВШСДТ
            </Typography>
          </Grid>
          <Grid item>
            <Button href="tel:+7 985 427-12-56">
              +7 985 427-12-56
            </Button>
          </Grid>
        </Hidden>
      </Grid>
    </div>
    {isSmDown
      ? <Header>
        <HeaderContent DateButton={DateButton}/>
      </Header>
      : <Parallax
        strangth={300}
        renderLayer={wrapParallaxRender(perc => {
          let p = perc - 0.8;
          if (p <= 0) p = 0;
          else p *= 5;

          const w = p * 250;

          return <div
            style={{
              position: 'absolute',
              zIndex: 1,
              background: `rgba(255, 255, 255)`,
              left: `0%`,
              top: '0%',
              height: '100%',
              width: `${w < 100 ? w : 100}%`,
            }}
          ></div>;
      })}
      >
        <Background>
          <div/>
        </Background>
        <Header>
          <HeaderContent DateButton={DateButton}/>
        </Header>
      </Parallax>
    }
    <Heading>
      <HeadingTitle>{data.publications.title}</HeadingTitle>
    </Heading>
    <Publications/>
    <Heading/>
    <AboutMe/>
    <Heading>
      <HeadingTitle>{data.myComment.title}</HeadingTitle>
    </Heading>
    <MyComment/>
    <Heading>
      <HeadingTitle>{data.forWho.title}</HeadingTitle>
    </Heading>
    <ForWhoPhotoLine/>
    <Heading/>
    <ForWho/>
    <Heading/>
    <Programm/>
    <Heading>
      <HeadingTitle>{data.partners.title}</HeadingTitle>
    </Heading>
    <Partners/>
    <Rules/>
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10} sm={6} md={4} lg={3} style={{ padding: 38 }}>
        <TextBackComponent />
      </Grid>
    </Grid>
    <Heading/>
    <Grid container style={{ backgroundColor: data.darkColor }} justify="center" alignItems="center">
      <Grid item xs={12} md={4} style={{ padding: 16 }}>
        <div style={{ color: 'white', paddingBottom: 16, borderBottom: '3px white solid', marginBottom: 16 }}>
          <Typography variant="h4" style={{ color: 'white', marginBottom: 16 }}>
            <Train style={{ color: red[500] }} fontSize="large"/> Метро
          </Typography>
          <Typography variant="h6" style={{ color: 'white' }}>
            Алексеевская
          </Typography>
        </div>
        <div style={{ color: 'white', paddingBottom: 16, borderBottom: '3px white solid', marginBottom: 16 }}>
          <Typography variant="h4" style={{ color: 'white', marginBottom: 16 }}>
            <School style={{ color: yellow[500] }} fontSize="large"/> Адрес
          </Typography>
          <Typography variant="h6" style={{ color: 'white' }}>
            г. Москва, ул. Проспект Мира д.101 стр.1
          </Typography>
        </div>
        <Typography variant="body2" style={{ fontSize: '0.8em', color: 'white', marginBottom: 16 }}>
          ИНН 7707047775
        </Typography>
        <Typography variant="body2" style={{ fontSize: '0.8em', color: 'white', marginBottom: 16 }}>
          КПП 770701001
        </Typography>
        <Typography variant="body2" style={{ fontSize: '0.8em', color: 'white', marginBottom: 16 }}>
          ОГРН 1117799000186
        </Typography>
        <Typography variant="body2" style={{ fontSize: '0.8em', color: 'white', marginBottom: 16 }}>
          Адрес для корреспонденции: 127055, г. Москва, ул. Новослободская д.14/19 стр.1
        </Typography>
        <Typography variant="body2" style={{ fontSize: '0.8em', color: 'white', marginBottom: 16 }}>
          р/с 40703810600000000063 в «Банк Кремлевский» (ООО), г. Москва, к/с 30101810745250000196, БИК 044525196
        </Typography>
      </Grid>
      <Grid item xs={12} md={8}>
        <Map/>
      </Grid>
      <Grid item xs={12} style={{ height: 50 }}/>
    </Grid>
  </>;
};
