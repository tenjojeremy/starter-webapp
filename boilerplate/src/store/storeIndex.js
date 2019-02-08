// Vendors
import React, { setGlobal } from 'reactn'

// States
import user from '../User/userState'
import ThemeManifestModule from '../Theme/themeManifest'

const { ThemeManifest: theme } = ThemeManifestModule

setGlobal({ user, theme })

// Exports
export default ({ children }) => <>{children}</>
