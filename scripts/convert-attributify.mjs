#!/usr/bin/env node

import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { extname, join } from 'node:path'
import process from 'node:process'

// UnoCSS utility patterns that appear as attributify attributes (boolean or with dash)
const UTILITY_PATTERNS = [
  // Layout
  /^flex$/,
  /^grid$/,
  /^inline-flex$/,
  /^inline-grid$/,
  /^inline-block$/,
  /^inline$/,
  /^block$/,
  /^hidden$/,
  /^contents$/,

  // Positioning
  /^absolute$/,
  /^relative$/,
  /^fixed$/,
  /^sticky$/,
  /^static$/,
  /^inset-/,
  /^inset$/,
  /^top-/,
  /^right-/,
  /^bottom-/,
  /^left-/,
  /^z-/,
  /^z--/,

  // Sizing
  /^w-/,
  /^h-/,
  /^size-/,
  /^min-w-/,
  /^min-h-/,
  /^max-w-/,
  /^max-h-/,

  // Spacing
  /^p-/,
  /^px-/,
  /^py-/,
  /^pt-/,
  /^pr-/,
  /^pb-/,
  /^pl-/,
  /^m-/,
  /^mx-/,
  /^my-/,
  /^mt-/,
  /^mr-/,
  /^mb-/,
  /^ml-/,
  /^gap-/,
  /^space-/,

  // Typography
  /^text-/,
  /^font-/,
  /^lh-/,
  /^tracking-/,
  /^leading-/,
  /^whitespace-/,
  /^break-/,
  /^truncate$/,
  /^italic$/,
  /^not-italic$/,
  /^underline$/,
  /^line-through$/,
  /^no-underline$/,
  /^uppercase$/,
  /^lowercase$/,
  /^capitalize$/,
  /^normal-case$/,
  /^decoration-/,
  /^line-clamp-/,

  // Background
  /^bg-/,

  // Border
  /^border-/,
  /^border$/,
  /^rounded-/,
  /^rounded$/,
  /^outline-/,
  /^ring-/,
  /^divide-/,

  // Effects
  /^shadow-/,
  /^shadow$/,
  /^op-/,
  /^opacity-/,
  /^blur-/,
  /^brightness-/,
  /^contrast-/,
  /^grayscale-/,
  /^grayscale$/,
  /^saturate-/,
  /^backdrop-/,
  /^filter-/,
  /^filter$/,

  // Transforms
  /^transform$/,
  /^scale-/,
  /^rotate-/,
  /^translate-/,
  /^skew-/,
  /^origin-/,

  // Transitions
  /^transition-/,
  /^transition$/,
  /^duration-/,
  /^ease-/,
  /^delay-/,
  /^animate-/,

  // Interactivity
  /^cursor-/,
  /^pointer-events-/,
  /^resize-/,
  /^select-/,
  /^touch-/,
  /^scroll-/,
  /^snap-/,
  /^overscroll-/,

  // Overflow
  /^of-/,
  /^overflow-/,

  // Visibility
  /^visible$/,
  /^invisible$/,
  /^collapse$/,

  // Flex/Grid alignment
  /^justify-/,
  /^items-/,
  /^content-/,
  /^self-/,
  /^place-/,
  /^order-/,
  /^grow-/,
  /^grow$/,
  /^shrink-/,
  /^shrink$/,
  /^basis-/,
  /^flex-/, // flex-1, flex-row, flex-col, etc.
  /^col-/,
  /^row-/,
  /^auto-cols-/,
  /^auto-rows-/,

  // Nimiq utilities (starting with nq-)
  /^nq-/,

  // Fluid utilities (starting with f-)
  /^f-/,

  // Group and peer variants
  /^group$/,
  /^peer$/,

  // Reka UI variants
  /^reka-/,
  /^leader-/,

  // Misc utilities
  /^aspect-/,
  /^object-/,
  /^fill-/,
  /^stroke-/,
  /^sr-only$/,
  /^not-sr-only$/,
  /^isolate$/,
  /^isolation-/,
  /^mix-blend-/,
  /^float-/,
  /^clear-/,
  /^box-/,
  /^appearance-/,
  /^columns-/,
  /^break-(?:before|after|inside)-/,
  /^list-/,
  /^table-/,
  /^caption-/,
  /^will-change-/,
  /^contain-/,
  /^accent-/,
  /^caret-/,
  /^un-placeholder-/, // custom for placeholder styling

  // Hover/focus/state variants (boolean style like hover:underline)
  /^hover:/,
  /^focus:/,
  /^active:/,
  /^disabled:/,
  /^checked:/,
  /^first:/,
  /^last:/,
  /^odd:/,
  /^even:/,
  /^group-/,
  /^peer-/,
  /^data-/,
  /^aria-/,
  /^before:/,
  /^after:/,
  /^placeholder:/,
  /^selection:/,
  /^marker:/,
  /^file:/,

  // Responsive variants (boolean style like md:block)
  /^sm:/,
  /^md:/,
  /^lg:/,
  /^xl:/,
  /^2xl:/,
  /^max-sm:/,
  /^max-md:/,
  /^max-lg:/,
  /^max-xl:/,
  /^max-2xl:/,

  // Dark/light mode
  /^dark:/,
  /^light:/,

  // Print
  /^print:/,
]

// Vue-specific attributes that should NOT be converted
const VUE_ATTRS = new Set([
  'v-if',
  'v-else',
  'v-else-if',
  'v-for',
  'v-show',
  'v-model',
  'v-bind',
  'v-on',
  'v-slot',
  'v-pre',
  'v-once',
  'v-memo',
  'v-cloak',
  'v-html',
  'v-text',
  'ref',
  'key',
  'is',
  'slot',
])

// HTML/component attributes that should NOT be converted (even if they look like utilities)
const SKIP_ATTRS = new Set([
  'id',
  'name',
  'type',
  'value',
  'placeholder',
  'href',
  'src',
  'alt',
  'title',
  'disabled',
  'readonly',
  'required',
  'checked',
  'selected',
  'multiple',
  'autocomplete',
  'autofocus',
  'tabindex',
  'role',
  'style',
  'for',
  'form',
  'action',
  'method',
  'target',
  'rel',
  'download',
  'width',
  'height',
  'loading',
  'decoding',
  'fetchpriority',
  'crossorigin',
  'srcset',
  'sizes',
  'media',
  'preload',
  'autoplay',
  'loop',
  'muted',
  'controls',
  'poster',
  'playsinline',
  'datetime',
  'year',
  'month',
  'day',
  'hour',
  'minute',
  'second',
  'lang',
  'dir',
  'translate',
  'spellcheck',
  'contenteditable',
  'draggable',
  'dropzone',
  'hidden',
  'inputmode',
  'enterkeyhint',
  'pattern',
  'minlength',
  'maxlength',
  'min',
  'max',
  'step',
  'accept',
  'capture',
  'list',
  'rows',
  'cols',
  'wrap',
  'scope',
  'colspan',
  'rowspan',
  'headers',
  'abbr',
  'axis',
  'nowrap',
  'valign',
  'align',
  'xmlns',
  'viewBox',
  'd',
  'cx',
  'cy',
  'r',
  'rx',
  'ry',
  'x',
  'y',
  'x1',
  'y1',
  'x2',
  'y2',
  'points',
  'preserveAspectRatio',
  'clip-path',
  'clip-rule',
  'fill-rule',
  'fill-opacity',
  'stroke-opacity',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-dasharray',
  'stroke-dashoffset',
  'pathLength',
  'marker-start',
  'marker-mid',
  'marker-end',
  'stop-color',
  'stop-opacity',
  'gradientUnits',
  'spreadMethod',
  'gradientTransform',
  'offset',
  'color-interpolation',
  // Component props
  'external',
  'label',
  'shadow',
  'leader',
  'index',
  'active',
  'icon',
  'variant',
  'size',
  'color',
  'rounded',
  'outline',
  'options',
  'items',
  'columns',
  'horizontal',
  'vertical',
  'reverse',
  'compact',
  'dense',
  'eager',
  'lazy',
  'flat',
  'tile',
  'plain',
  'icon-only',
  'block',
  'stacked',
  'divided',
  'striped',
  'hoverable',
  'bordered',
  'sortable',
  'selectable',
  'expandable',
  'searchable',
  'clearable',
  'filterable',
  'scrollable',
  'resizable',
  'moveable',
  'closable',
  'dismissible',
  'floating',
  'overlay',
  'fullscreen',
  'inset',
  'modal',
  'persistent',
  'temporary',
  'permanent',
  'mini',
  'clipped',
  'app',
  'mobile',
  'desktop',
  'rail',
  'location',
  'position',
  'elevation',
  'direction',
  'wrap',
  'no-wrap',
  'column',
  'grow',
  'shrink',
  'as-child',
  'orientation',
  'collision-boundary',
  'collision-padding',
  'hide-when-detached',
  'update-position-strategy',
  'avoid-collisions',
  'side',
  'side-offset',
  'align-offset',
  'arrow-padding',
  'as',
  'delay-duration',
  'skip-delay-duration',
  'disable-closing-trigger',
  'disable-hoverable-content',
  'ignore-non-keyboard-focus',
  'delay',
  'duration',
  'show-delay',
  'hide-delay',
  'priority',
  'default-value',
  'model-value',
  'default-open',
  'open',
  'default-checked',
  'default-pressed',
  'pressed',
  'inverted',
  'get-value-label',
  'by',
  'enter-active-class',
  'enter-from-class',
  'enter-to-class',
  'leave-active-class',
  'leave-from-class',
  'leave-to-class',
  'view-transition-post-title',
  'view-transition-post-img', // custom view transitions
  'small-heading',
  'footer-bg-color',
  'dark-header',
  'show-socials-hexagon-bg', // component props
  'children:mx-auto',
  'children:max-w-prose', // prose children utilities (keep as prop pattern)
  'scheme-dark', // color scheme
])

function isUtilityAttribute(attrName) {
  // Skip Vue directives and bindings
  if (attrName.startsWith('v-') || attrName.startsWith(':') || attrName.startsWith('@') || attrName.startsWith('#')) {
    return false
  }

  // Skip known HTML/Vue/component attributes
  if (VUE_ATTRS.has(attrName) || SKIP_ATTRS.has(attrName)) {
    return false
  }

  // Skip aria- and data- attributes (but NOT data: variants like data-state:)
  if (attrName.startsWith('aria-') && !attrName.includes(':')) {
    return false
  }
  if (attrName.startsWith('data-') && !attrName.includes(':')) {
    return false
  }

  // Check if it matches a utility pattern
  return UTILITY_PATTERNS.some(pattern => pattern.test(attrName))
}

// Attributify patterns with value assignments like py="80 md:120"
const ATTRIBUTIFY_BASE_PATTERNS = [
  'flex',
  'grid',
  'inline',
  'p',
  'px',
  'py',
  'pt',
  'pr',
  'pb',
  'pl',
  'm',
  'mx',
  'my',
  'mt',
  'mr',
  'mb',
  'ml',
  'w',
  'h',
  'size',
  'min-w',
  'min-h',
  'max-w',
  'max-h',
  'gap',
  'space',
  'text',
  'font',
  'bg',
  'border',
  'rounded',
  'outline',
  'ring',
  'divide',
  'shadow',
  'op',
  'opacity',
  'blur',
  'scale',
  'rotate',
  'translate',
  'skew',
  'origin',
  'transition',
  'duration',
  'ease',
  'delay',
  'animate',
  'cursor',
  'select',
  'scroll',
  'of',
  'overflow',
  'justify',
  'items',
  'content',
  'self',
  'place',
  'order',
  'grow',
  'shrink',
  'basis',
  'col',
  'row',
  'top',
  'right',
  'bottom',
  'left',
  'inset',
  'z',
  'aspect',
  'object',
  'f', // f is for fluid utilities
  'lh', // line-height
  'translate-x',
  'translate-y', // transform translate
  'outline-color', // outline color
  'line-clamp', // text line clamp
  'decoration', // text decoration
]

// Responsive prefixed attributify patterns like md:border="..."
const RESPONSIVE_PREFIXES = ['sm', 'md', 'lg', 'xl', '2xl', 'max-sm', 'max-md', 'max-lg', 'max-xl', 'max-2xl']

function isAttributifyWithValue(attrName) {
  // Check base patterns
  if (ATTRIBUTIFY_BASE_PATTERNS.includes(attrName)) {
    return true
  }

  // Check responsive prefixed patterns like md:border, sm:w, etc.
  for (const prefix of RESPONSIVE_PREFIXES) {
    if (attrName.startsWith(`${prefix}:`)) {
      const baseName = attrName.slice(prefix.length + 1)
      // Check if the base is a known utility
      if (ATTRIBUTIFY_BASE_PATTERNS.includes(baseName)
        || ['border', 'w', 'h', 'p', 'm', 'text', 'flex', 'grid'].includes(baseName)) {
        return true
      }
    }
  }

  return false
}

function parseAttributeValue(attrName, attrValue) {
  // Parses attributify value syntax like flex="~ col items-center"
  // Returns array of class names
  const classes = []
  const values = attrValue.split(/\s+/).filter(Boolean)

  for (const val of values) {
    if (val === '~') {
      // ~ means include the base utility
      classes.push(attrName)
    }
    else if (/^[a-z]+:/.test(val) && !attrName.includes(':')) {
      // Responsive/state variant like md:120 -> py-md:120
      classes.push(`${attrName}-${val}`)
    }
    else if (val.startsWith('[') || val.startsWith('-') || /^\d/.test(val)) {
      // Arbitrary value or number -> py-80, py-[calc(...)]
      classes.push(`${attrName}-${val}`)
    }
    else {
      // Named value -> flex-col, items-center
      classes.push(`${attrName}-${val}`)
    }
  }

  return classes
}

function findOutermostTemplate(content) {
  // Find the outermost <template> section by counting opening/closing tags
  const templateStartMatch = content.match(/<template[^>]*>/)
  if (!templateStartMatch)
    return null

  const startIndex = templateStartMatch.index
  const startTag = templateStartMatch[0]
  let searchIndex = startIndex + startTag.length
  let depth = 1

  // Find the matching closing </template> by counting depth
  while (depth > 0 && searchIndex < content.length) {
    const openRegex = /<template[^>]*>/g
    const closeRegex = /<\/template>/g
    openRegex.lastIndex = searchIndex
    closeRegex.lastIndex = searchIndex

    const openMatch = openRegex.exec(content)
    const closeMatch = closeRegex.exec(content)

    if (!closeMatch)
      return null // No more closing tags

    if (openMatch && openMatch.index < closeMatch.index) {
      depth++
      searchIndex = openMatch.index + openMatch[0].length
    }
    else {
      depth--
      searchIndex = closeMatch.index + closeMatch[0].length
      if (depth === 0) {
        return {
          startIndex,
          startTag,
          endIndex: closeMatch.index,
          endTag: closeMatch[0],
          templateContent: content.slice(startIndex + startTag.length, closeMatch.index),
        }
      }
    }
  }
  return null
}

function convertAttributifyToClass(content) {
  const templateInfo = findOutermostTemplate(content)
  if (!templateInfo)
    return content

  const { startIndex, startTag, endIndex, endTag, templateContent } = templateInfo
  const beforeTemplate = content.slice(0, startIndex)
  const afterTemplate = content.slice(endIndex + endTag.length)

  // Process template content
  // Use a regex that properly handles > inside quoted attribute values
  // This matches: <tagname ...attributes... > or <tagname ...attributes... />
  // where attributes can contain > inside quotes
  const tagRegex = /<([a-z][a-z0-9-]*)(\s(?:[^>"'/]|"[^"]*"|'[^']*')*)?\/?>/gi

  const processedTemplate = templateContent.replace(tagRegex, (match, tagName, attrsString) => {
    if (!attrsString || !attrsString.trim())
      return match

    const isSelfClosing = match.endsWith('/>')
    const attrRegex = /([a-z_:@#][-\w:.]*)(?:=(?:"([^"]*)"|'([^']*)'|([^\s>"']+)))?/gi

    const existingClasses = []
    const utilityClasses = []
    const otherAttrs = []

    let attrMatch = attrRegex.exec(attrsString)
    while (attrMatch !== null) {
      const [fullMatch, attrName, doubleQuoted, singleQuoted, unquoted] = attrMatch
      const attrValue = doubleQuoted ?? singleQuoted ?? unquoted ?? null

      if (attrName === 'class') {
        if (attrValue) {
          existingClasses.push(...attrValue.split(/\s+/).filter(Boolean))
        }
      }
      else if (attrName === ':class') {
        otherAttrs.push(fullMatch)
      }
      else if (isAttributifyWithValue(attrName) && attrValue !== null) {
        const classes = parseAttributeValue(attrName, attrValue)
        utilityClasses.push(...classes)
      }
      else if (isUtilityAttribute(attrName)) {
        if (attrValue === null) {
          utilityClasses.push(attrName)
        }
        else {
          utilityClasses.push(`${attrName}-${attrValue}`)
        }
      }
      else {
        otherAttrs.push(fullMatch)
      }
      attrMatch = attrRegex.exec(attrsString)
    }

    const allClasses = [...existingClasses, ...utilityClasses]
    const newAttrs = []
    if (allClasses.length > 0) {
      newAttrs.push(`class="${allClasses.join(' ')}"`)
    }
    newAttrs.push(...otherAttrs)

    const attrsStr = newAttrs.length > 0 ? ` ${newAttrs.join(' ')}` : ''
    const closing = isSelfClosing ? ' />' : '>'
    return `<${tagName}${attrsStr}${closing}`
  })

  return beforeTemplate + startTag + processedTemplate + endTag + afterTemplate
}

function processFile(filePath) {
  const content = readFileSync(filePath, 'utf-8')
  const converted = convertAttributifyToClass(content)

  if (content !== converted) {
    writeFileSync(filePath, converted)
    return true
  }
  return false
}

function walkDir(dir, callback) {
  const files = readdirSync(dir)
  for (const file of files) {
    const filePath = join(dir, file)
    const stat = statSync(filePath)
    if (stat.isDirectory()) {
      // Skip node_modules, .nuxt, etc.
      if (!file.startsWith('.') && file !== 'node_modules') {
        walkDir(filePath, callback)
      }
    }
    else if (extname(file) === '.vue') {
      callback(filePath)
    }
  }
}

// Main execution
const appDir = join(process.cwd(), 'app')
let modifiedCount = 0
let totalFiles = 0

walkDir(appDir, (filePath) => {
  totalFiles++
  if (processFile(filePath)) {
    modifiedCount++
    console.log(`Modified: ${filePath}`)
  }
})

console.log(`\nProcessed ${totalFiles} files, modified ${modifiedCount}`)
