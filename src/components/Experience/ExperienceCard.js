import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Fade from 'react-reveal/Fade'

import { ThemeContext } from '../../contexts/ThemeContext'

import expImgWhite from '../../assets/svg/experience/expImgWhite.svg'
import expImgBlack from '../../assets/svg/experience/expImgBlack.svg'

import './Experience.css'
import { useState } from 'react'

function ExperienceCard({
  id,
  company,
  jobtitle,
  startYear,
  endYear,
  additionalInfo,
  url,
}) {
  const { theme } = useContext(ThemeContext)
  const [showInfo, setShowInfo] = useState(false)

  const useStyles = makeStyles((t) => ({
    experienceCard: {
      backgroundColor: theme.primary30,
      position: 'relative',
      overflow: 'hidden',
      transition: 'height 0.3s ease, background-color 0.3s ease',
      height: '140px', // Default height
      '&:hover': {
        backgroundColor: theme.primary50,
        height: '250px', // Increased height on hover
      },
      '& .experience-details': {
        transition: 'opacity 0.3s ease',
      },
      '&:hover .experience-details': {
        opacity: 0,
      },
    },
    additionalInfo: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      padding: '10px',
      backgroundColor: '#A0A080',
      color: '#fff',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      overflow: 'auto',
      fontSize: '1.2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ul: {
        listStyleType: 'disc',
        paddingLeft: '20px',
      },
      li: {
        marginBottom: '5px',
      },
      a: {
        color: '#0000ff',
      },
      '&:hover': {
        opacity: 0.9,
      },
    },
  }))

  const classes = useStyles()

  return (
    <Fade bottom>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        key={id}
        className={`experience-card ${classes.experienceCard} ${showInfo ? 'dimmed' : ''}`}
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
      >
        <div className="expcard-img" style={{ backgroundColor: theme.primary }}>
          <img src={theme.type === 'light' ? expImgBlack : expImgWhite} alt="" />
        </div>
        <div className="experience-details">
          <h6 style={{ color: theme.primary }}>
            {startYear} - {endYear}
          </h6>
          <h4 style={{ color: theme.tertiary }}>{jobtitle}</h4>
          <h5 style={{ color: theme.tertiary80 }}>{company}</h5>
        </div>
        <div
          className={classes.additionalInfo}
          dangerouslySetInnerHTML={{ __html: additionalInfo }}
        />
      </a>
    </Fade>
  )
}

export default ExperienceCard
