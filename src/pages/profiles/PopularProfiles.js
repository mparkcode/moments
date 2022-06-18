import { Container } from 'bootstrap-4-react/lib/components/layout'
import React from 'react'
import appStyles from '../../App.module.css'
import Asset from '../../components/Asset'
import Profile from './Profile'
import { useProfileData } from '../../contexts/ProfileDataContext'

const PopularProfiles = ({mobile}) => {
    const {popularProfiles} = useProfileData()
  return (
    <Container className={`${appStyles.Content} ${mobile && 'd-lg-none text-center mb-3'}`}>
        {mobile? (
            <div className='d-flex justify-content-around'>
                {popularProfiles?.results.slice(0,4).map(profile => (
                    <Profile key={profile.id} profile={profile} mobile />
                ))}                
            </div>
        ) : (
            popularProfiles?.results.length ? (
                <>
                <p>Most followed profiles</p>
                {popularProfiles?.results.map(profile => (
                    <Profile key={profile.id} profile={profile} />
                ))}
                </>
            ) : (
                <Asset spinner />
            )
        )}
        
        
    </Container>
  )
}

export default PopularProfiles