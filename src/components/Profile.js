import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return (
        <div>
            <div className="profileImg">
                <img alt="" className="img-circle center-block" 
                    src={profileObj.picture} width="200" />
            </div>
            <h1 className="text-center">{profileObj.name}</h1>
            <h2 className="text-center">{profileObj.label}</h2>
            <div className="divider"></div>
            <ul className="list-unstyled contact-links text-center">
                <li>
                    <i className="fa fa-lg fa-location-arrow"></i>
                    {profileObj.location.city}, {profileObj.location.country}
                </li>
                <li>
                    <i className="fa fa-lg fa-envelope"></i>
                    <a href={`mailto:${profileObj.email}`}>{profileObj.email}</a>
                </li>
            </ul>
            <div className="divider"></div>
            <ul className="profileLinks list-inline text-center">
                <li>
                    <a href={profileObj.profiles[0].url}>
                        <i className="fa fa-facebook fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href={profileObj.profiles[1].url}>
                        <i className="fa fa-github fa-2x"></i>
                    </a>
                </li>
            </ul>
            <div className="divider"></div>
            <p>I built this site with <a href="https://reactjs.org/">React </a> components.</p>
        </div>
    )
};

export default Profile;