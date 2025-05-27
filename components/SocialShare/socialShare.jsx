import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

export default function SocialShare({ url }) {
    return (
        <div className="flex items-center gap-3">
            <FacebookShareButton
                url={url}
                // quote={"Quote"}
                // hashtag="#yourhashtag"
                className="transition-transform hover:scale-110"
            >
                <FacebookIcon size={36} round />
            </FacebookShareButton>

            <div className="x-button">
                <TwitterShareButton
                    url={url}
                    // quote={"Quote"}
                    // via="yourtwitterhandle"
                    // hashtags={['hashtag1', 'hashtag2']}
                    className="transition-transform hover:scale-110"
                >
                    <div className="x-icon w-9 h-9 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-gray-800 transition-colors">
                        X
                    </div>
                </TwitterShareButton>
            </div>

            <LinkedinShareButton
                url={url}
                // quote={"Quote"}
                className="transition-transform hover:scale-110"
            >
                <LinkedinIcon size={36} round />
            </LinkedinShareButton>

            <WhatsappShareButton
                url={url}
                // quote={"Quote"}
                className="transition-transform hover:scale-110"
            >
                <WhatsappIcon size={36} round />
            </WhatsappShareButton>
        </div>
    )
}