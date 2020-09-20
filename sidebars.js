module.exports = {
  docs: [{
    type: 'doc',
    id: 'home'
  }, {
    type: 'category',
    label: 'Network setup',
    collapsed: false,
    items: ['prepare-inputs/index', 'prepare-inputs/upload-opportunity-data']
  }, {
    type: 'category',
    label: 'Network editing',
    collapsed: false,
    items: [
      'edit-scenario/index',
      'edit-scenario/modifications',
      'edit-scenario/timetable',
      'edit-scenario/phasing',
      'edit-scenario/usage',
      'edit-scenario/example'
    ]
  }, {
    type: 'category',
    label: 'Analyze Accessibility',
    collapsed: false,
    items: [
      'analysis/index',
      'analysis/regional',
      'analysis/configuration'
    ]
  }, {
    type: 'category',
    label: 'Learn more',
    collapsed: false,
    items: [
      'learn-more/developers',
      'learn-more/faq',
      'learn-more/lts',
      'learn-more/osm',
      'learn-more/pnr',
      'analysis/methodology',
      'glossary'
    ]
  }]
}