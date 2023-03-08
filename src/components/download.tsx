import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import fortawesome from "../fortawesome"

export enum DownloadType {
  game = "Game"
}

interface DownloadProps{
  url: string,
  downloadType: DownloadType
}

export default function Download({url, downloadType}: DownloadProps) {
  return (
    <a href={url} download>
      Download {downloadType}
      <FontAwesomeIcon icon={fortawesome.faDownload} />
    </a>
  )
}
