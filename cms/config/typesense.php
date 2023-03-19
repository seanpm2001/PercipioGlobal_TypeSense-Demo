<?php
/**
 * Typesense plugin for Craft CMS 4.x
 *
 * Craft Plugin that synchronises with Typesense
 *
 * @link      https://percipio.london
 * @copyright Copyright (c) 2022 percipiolondon
 */

/**
 * Typesense config.php
 *
 * This file exists only as a template for the Typesense settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'typesense.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
    'collections' => [
        // CONTENT
        \percipiolondon\typesense\TypesenseCollectionIndex::create(
            [
                'name' => 'schools',
                'section' => 'schools.default', //section handle + entry type handle
                'fields' => [
                    [
                        'name' => 'title',
                        'type' => 'string',
                        'sort' => true,
                    ],
                    [
                        'name' => 'slug',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'urn',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'handle',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'schoolType',
                        'type' => 'string',
                        'facet' => true
                    ],
                    [
                        'name' => 'localAuthority',
                        'type' => 'string',
                        'facet' => true
                    ],
                    [
                        'name' => 'nutsLevel1',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'nutsLevel1Code',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'street',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'town',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'locality',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'county',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'region',
                        'type' => 'string',
                    ],
                    [
                        'name' => 'geolocation',
                        'type' => 'geopoint',
                        'facet' => true,
                        'sort' => true
                    ],
                    [
                        'name' => 'post_date_timestamp',
                        'type' => 'int32',
                    ]
                ],
                'default_sorting_field' => 'post_date_timestamp', // can only be an integer,
                'resolver' => static function(\craft\elements\Entry $entry) {

                    return [
                        'id' => (string)$entry->id,
                        'title' => $entry->title,
                        'handle' => $entry->section->handle,
                        'slug' => $entry->slug,
                        'urn' => $entry->urn,
                        'post_date_timestamp' => (int)$entry->postDate->format('U'),
                        'geolocation' => [(float)$entry->latitude,(float)$entry->longitude],
                        'schoolType' => $entry->schoolType,
                        'localAuthority' => $entry->localAuthority,
                        'nutsLevel1' => $entry->nutsLevel1,
                        'nutsLevel1Code' => $entry->nutsLevel1Code,
                        'urn' => $entry->urn,
                        'street' => $entry->street ?? '',
                        'town' => $entry->town ?? '',
                        'locality' => $entry->locality ?? '',
                        'county' => $entry->county ?? '',
                        'region' => $entry->region ?? '',
                    ];
                }
            ]
        )
        ->elementType(\craft\elements\Entry::class)
        ->criteria(function(\craft\elements\db\EntryQuery $query) {
            return $query->section('schools');
        }),
    ]
];
