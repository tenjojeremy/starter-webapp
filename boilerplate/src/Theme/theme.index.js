// Vendors
import React from 'react'
import MaterialUI from './Theme.Vendors/MaterialUi'
// Theme Manifest
import { ThemeManifest } from './Theme.manifest'
// Figma
import setColors from './Theme.Colors/Figma.Colors.set'
// Global
import './Theme.Resets/tagBody.css'
import './Theme.Resets/Animations/transition.css'
import './Theme.Fonts/fonts.css'

// Set Globals
const { colors } = ThemeManifest

setColors(colors)

// Exports
export default ({ children }) => <MaterialUI ThemeManifest={ThemeManifest}>{children}</MaterialUI>