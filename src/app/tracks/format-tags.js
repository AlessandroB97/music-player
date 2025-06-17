"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLabels = [
    {
        key: 'dataformat',
        label: 'Data format'
    }, {
        key: 'tagTypes',
        label: 'Tag header type(s)'
    }, {
        key: 'duration',
        label: 'Duration',
        toText: function (v) { return Math.round(v * 100) / 100 + ' seconds'; }
    }, {
        key: 'bitrate',
        label: 'Bit-rate',
        toText: function (v) { return Math.round(v / 1000) + ' kbps'; }
    }, {
        key: 'sampleRate',
        label: 'Sample-rate',
        toText: function (v) { return Math.round(v / 100) / 10 + ' hz'; }
    }, {
        key: 'bitsPerSample',
        label: 'Audio bit depth'
    }, {
        key: 'encoder',
        label: 'Encoder name'
    }, {
        key: 'codecProfile',
        label: 'Codec profile'
    }, {
        key: 'lossless',
        label: 'Lossless?'
    }, {
        key: 'numberOfChannels',
        label: 'Number of channels'
    }, {
        key: 'audioMD5',
        label: 'Audio MD5 hash'
    }
];
var mbBaseUrl = 'https://musicbrainz.org';
exports.commonLabels = [
    {
        key: 'title',
        label: 'Track title'
    }, {
        key: 'titlesort',
        label: 'Track title, formatted for alphabetic ordering'
    }, {
        key: 'subtitle',
        label: 'Contains the subtitle of the content'
    }, {
        key: 'work',
        label: 'The canonical title of the work',
        keyRef: 'https://musicbrainz.org/doc/Work'
    }, {
        key: 'grouping',
        label: 'Content group description.'
    }, {
        key: 'track',
        label: 'Track number',
        toText: function (v) { return v.of ? v.no + " / " + v.of : "" + v.no; }
    }, {
        key: 'totaltracks',
        label: 'The total number of tracks'
    }, {
        key: 'disk',
        label: 'Disk or media number',
        toText: function (v) { return v.of ? v.no + " / " + v.of : "" + v.no; }
    }, {
        key: 'totaldiscs',
        label: 'The total number of discs'
    }, {
        key: 'discsubtitle',
        label: 'The Media Title given to a specific disc'
    }, {
        key: 'artist',
        label: 'Artist'
    }, {
        key: 'artists',
        label: 'Artists'
    }, {
        key: 'albumartist',
        label: 'Album artist'
    }, {
        key: 'artistsort',
        label: 'Track artist sort name'
    }, {
        key: 'albumartistsort',
        label: 'Album artist sort name'
    }, {
        key: 'originalartist',
        label: 'Original track artists.'
    }, {
        key: 'composer',
        label: 'Composer'
    }, {
        key: 'composersort',
        label: 'Composer, formatted for alphabetic ordering'
    }, {
        key: 'lyricist',
        label: 'Lyricist, formatted for alphabetic ordering'
    }, {
        key: 'writer',
        label: 'Writer'
    }, {
        key: 'conductor',
        label: 'Conductor'
    }, {
        key: 'remixer',
        label: 'Remixer(s)'
    }, {
        key: 'arranger',
        label: 'Arranger'
    }, {
        key: 'engineer',
        label: 'Engineer(s)'
    }, {
        key: 'producer',
        label: 'Producer(s)'
    }, {
        key: 'djmixer',
        label: 'Mix-DJ(s)'
    }, {
        key: 'mixer',
        label: 'Mixed by'
    }, {
        key: 'technician',
        label: 'Technician who digitized subject'
    }, {
        key: 'performer:instrument',
        label: 'Performer relationship types, instrument can also be vocals.'
    }, {
        key: 'year',
        label: 'Release year'
    }, {
        key: 'album',
        label: 'Album'
    }, {
        key: 'albumsort',
        label: 'Album title, formatted for alphabetic ordering'
    }, {
        key: 'originalalbum',
        label: 'Original release title'
    }, {
        key: 'compilation',
        label: 'Is part of compilation'
    }, {
        key: 'date',
        label: 'Release date'
    }, {
        key: 'originaldate',
        label: 'Original release date'
    }, {
        key: 'originalyear',
        label: 'Original release year',
    }, {
        key: 'media',
        label: 'Release Format'
    }, {
        key: 'label',
        label: 'Release label name(s)'
    }, {
        key: 'catalognumber',
        label: 'Release catalog number(s)',
        keyRef: 'https://musicbrainz.org/doc/Release/Catalog_Number'
    }, {
        key: 'genre',
        label: 'Genres'
    }, {
        key: 'mood',
        label: 'Keywords to reflect the mood of the audio'
    }, {
        key: 'comment',
        label: 'Comments'
    }, {
        key: 'notes',
        label: 'Notes'
    }, {
        key: 'lyrics',
        label: 'Lyricist'
    }, {
        key: 'key',
        label: 'Initial key'
    }, {
        key: 'rating',
        label: 'Object holding rating score [0..1]'
    }, {
        key: 'bpm',
        label: 'Beats Per Minute (BPM)'
    }, {
        key: 'show',
        label: 'TV show title'
    }, {
        key: 'showsort',
        label: 'TV show sorting title'
    }, {
        key: 'podcast',
        label: 'ToDo',
        keyRef: 'https://github.com/Borewit/music-metadata/issues/13'
    }, {
        key: 'podcasturl',
        label: 'ToDo',
        keyRef: 'https://github.com/Borewit/music-metadata/issues/13'
    }, {
        key: 'releasestatus',
        label: 'Releases status',
        keyRef: mbBaseUrl + '/History:Release_Status'
    }, {
        key: 'releasetype',
        label: 'Release type',
        keyRef: 'https://musicbrainz.org/doc/Release_Group/Type'
    }, {
        key: 'releasecountry',
        label: 'Release country',
        keyRef: mbBaseUrl + '/Release_Country'
    }, {
        key: 'barcode',
        label: 'Release barcode',
        keyRef: 'https://musicbrainz.org/doc/Barcode',
        valueRef: function (v) { return 'https://www.barcodelookup.com/' + v; }
    }, {
        key: 'isrc',
        label: 'ISRC',
        keyRef: 'https://musicbrainz.org/doc/ISRC',
        valueRef: function (v) { return 'https://isrcsearch.ifpi.org/#!/search?isrcCode=' + v + '&tab=lookup&showReleases=0&start=0&number=10'; }
    }, {
        key: 'asin',
        label: 'ASIN',
        keyRef: 'https://musicbrainz.org/doc/ASIN'
    }, {
        key: 'script',
        label: 'Release Script',
        keyRef: 'https://picard.musicbrainz.org/docs/tags/'
    }, {
        key: 'language',
        label: 'Language used in metadata'
    }, {
        key: 'copyright',
        label: 'Copyright.'
    }, {
        key: 'license',
        label: 'License'
    }, {
        key: 'encodedby',
        label: 'Encoded by (person/organisation)'
    }, {
        key: 'encodersettings',
        label: 'Encoder Settings'
    }, {
        key: 'gapless',
        label: 'Gapless album indicator'
    }, {
        key: 'musicbrainz_recordingid',
        label: 'Release recording MBID',
        keyRef: 'https://musicbrainz.org/doc/Recording',
        valueRef: function (v) { return mbBaseUrl + '/recording/' + v; }
    }, {
        key: 'musicbrainz_trackid',
        label: 'Release track MBID',
        keyRef: 'https://musicbrainz.org/doc/MusicBrainz_Identifier',
        valueRef: function (v) { return mbBaseUrl + '/recording/' + v; }
    }, {
        key: 'musicbrainz_albumid',
        label: 'Album release MBID',
        keyRef: 'https://musicbrainz.org/doc/Release',
        valueRef: function (v) { return mbBaseUrl + '/release/' + v; }
    }, {
        key: 'musicbrainz_artistid',
        label: 'Track artists MBIDs',
        keyRef: 'https://musicbrainz.org/doc/Artist',
        valueRef: function (v) { return mbBaseUrl + '/artist/' + v; }
    }, {
        key: 'musicbrainz_albumartistid',
        label: 'Album artists',
        keyRef: 'https://musicbrainz.org/doc/Artist',
        valueRef: function (v) { return mbBaseUrl + '/artist/' + v; }
    }, {
        key: 'musicbrainz_releasegroupid',
        label: 'Release group MBID',
        keyRef: 'https://musicbrainz.org/doc/Release_Group',
        valueRef: function (v) { return mbBaseUrl + '/release-group/' + v; }
    }, {
        key: 'musicbrainz_workid',
        label: 'Work MBID',
        keyRef: 'https://musicbrainz.org/doc/Work',
        valueRef: function (v) { return mbBaseUrl + '/work/' + v; }
    }, {
        key: 'musicbrainz_trmid',
        label: 'TRM Acoustic ID',
        keyRef: 'https://musicbrainz.org/doc/Fingerprinting#TRM'
    }, {
        key: 'musicbrainz_discid',
        label: 'Disc ID',
        keyRef: 'https://musicbrainz.org/doc/Disc_ID'
    }, {
        key: 'acoustid_id',
        label: 'Acoust ID',
        keyRef: 'https://en.wikipedia.org/wiki/Acoustic_fingerprint',
        valueRef: function (v) { return 'https://acoustid.org/track/' + v; }
    }, {
        key: 'acoustid_fingerprint',
        label: 'AcoustID Fingerprint',
        keyRef: 'https://acoustid.org/'
    }, {
        key: 'musicip_puid',
        label: 'PUIDs',
        keyRef: 'https://musicbrainz.org/doc/Fingerprinting#PUID'
    }, {
        key: 'musicip_fingerprint',
        label: 'MusicIP Fingerprint), not sure which algorithm.'
    }, {
        key: 'discogs_artist_id',
        label: 'Discogs artist ID',
        valueRef: function (v) { return 'https://www.discogs.com/artist/' + v; }
    }, {
        key: 'discogs_label_id',
        label: 'Discogs label ID',
        valueRef: function (v) { return 'https://www.discogs.com/label/' + v; }
    }, {
        key: 'discogs_master_release_id',
        label: 'Discogs master release ID',
        valueRef: function (v) { return 'https://www.discogs.com/master/' + v; }
    }, {
        key: 'discogs_votes',
        label: 'Discogs votes'
    }, {
        key: 'discogs_rating',
        label: 'Discogs rating'
    }, {
        key: 'discogs_release_id',
        label: 'Discogs release identifier',
        valueRef: function (v) { return 'https://www.discogs.com/release/' + v; }
    }, {
        key: 'website',
        label: 'URL of website'
    }, {
        key: 'averageLevel',
        label: 'Average gain level.'
    }, {
        key: 'peakLevel',
        label: 'Peak gain level.'
    }, {
        key: 'replaygain_track_peak',
        label: 'Replay track peak'
    }, {
        key: 'replaygain_track_gain',
        label: 'Replay track gain'
    }, {
        key: 'description',
        label: 'Description'
    }, {
        key: 'tvShow',
        label: 'TV Show'
    }, {
        key: 'tvShowSort',
        label: 'TV show title (alphabetic)'
    }, {
        key: 'tvSeason',
        label: 'TV Season'
    }, {
        key: 'tvEpisode',
        label: 'TV Episode'
    }, {
        key: 'tvEpisodeId',
        label: 'TV Episode ID'
    }, {
        key: 'tvNetwork',
        label: 'TV Network'
    } /*, {
      key: 'picture',
      label: 'Embedded cover art'
    }*/
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXRhZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3JtYXQtdGFncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQW1CYSxRQUFBLFlBQVksR0FBZTtJQUN0QztRQUNFLEdBQUcsRUFBRSxZQUFZO1FBQ2pCLEtBQUssRUFBRSxhQUFhO0tBQ3JCLEVBQUU7UUFDRCxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxvQkFBb0I7S0FDNUIsRUFBRTtRQUNELEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFVBQVU7UUFDakIsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLFVBQVUsRUFBdEMsQ0FBc0M7S0FDcEQsRUFBRTtRQUNELEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLFVBQVU7UUFDakIsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsT0FBTyxFQUE5QixDQUE4QjtLQUM1QyxFQUFFO1FBQ0QsR0FBRyxFQUFFLFlBQVk7UUFDakIsS0FBSyxFQUFFLGFBQWE7UUFDcEIsTUFBTSxFQUFFLFVBQUEsQ0FBQyxJQUFJLE9BQUEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssRUFBaEMsQ0FBZ0M7S0FDOUMsRUFBRTtRQUNELEdBQUcsRUFBRSxlQUFlO1FBQ3BCLEtBQUssRUFBRSxpQkFBaUI7S0FDekIsRUFBRTtRQUNELEdBQUcsRUFBRSxTQUFTO1FBQ2QsS0FBSyxFQUFFLGNBQWM7S0FDdEIsRUFBRTtRQUNELEdBQUcsRUFBRSxjQUFjO1FBQ25CLEtBQUssRUFBRSxlQUFlO0tBQ3ZCLEVBQUU7UUFDRCxHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxX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R0FBRyxFQUFFLGdCQUFnQjtRQUNyQixLQUFLLEVBQUUsZ0JBQWdCO0tBQ3hCLEVBQUU7UUFDRCxHQUFHLEVBQUUsb0JBQW9CO1FBQ3pCLEtBQUssRUFBRSw0QkFBNEI7UUFDbkMsUUFBUSxFQUFFLFVBQUMsQ0FBQyxJQUFLLE9BQUEsa0NBQWtDLEdBQUcsQ0FBQyxFQUF0QyxDQUFzQztLQUN4RCxFQUFFO1FBQ0QsR0FBRyxFQUFFLFNBQVM7UUFDZCxLQUFLLEVBQUUsZ0JBQWdCO0tBQ3hCLEVBQUU7UUFDRCxHQUFHLEVBQUUsY0FBYztRQUNuQixLQUFLLEVBQUUscUJBQXFCO0tBQzdCLEVBQUU7UUFDRCxHQUFHLEVBQUUsV0FBVztRQUNoQixLQUFLLEVBQUUsa0JBQWtCO0tBQzFCLEVBQUU7UUFDRCxHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLEtBQUssRUFBRSxtQkFBbUI7S0FDM0IsRUFBRTtRQUNELEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsS0FBSyxFQUFFLG1CQUFtQjtLQUMzQixFQUFFO1FBQ0QsR0FBRyxFQUFFLGFBQWE7UUFDbEIsS0FBSyxFQUFFLGFBQWE7S0FDckIsRUFBRTtRQUNELEdBQUcsRUFBRSxRQUFRO1FBQ2IsS0FBSyxFQUFFLFNBQVM7S0FDakIsRUFBRTtRQUNELEdBQUcsRUFBRSxZQUFZO1FBQ2pCLEtBQUssRUFBRSw0QkFBNEI7S0FDcEMsRUFBRTtRQUNELEdBQUcsRUFBRSxVQUFVO1FBQ2YsS0FBSyxFQUFFLFdBQVc7S0FDbkIsRUFBRTtRQUNELEdBQUcsRUFBRSxXQUFXO1FBQ2hCLEtBQUssRUFBRSxZQUFZO0tBQ3BCLEVBQUU7UUFDRCxHQUFHLEVBQUUsYUFBYTtRQUNsQixLQUFLLEVBQUUsZUFBZTtLQUN2QixFQUFFO1FBQ0QsR0FBRyxFQUFFLFdBQVc7UUFDaEIsS0FBSyxFQUFFLFlBQVk7S0FDcEIsQ0FBQTs7O09BR0U7Q0FDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBUYWdMYWJlbCB7XG4gIC8qKlxuICAgKiBBUEkgdGFnIHByb3BlcnR5IG5hbWVcbiAgICovXG4gIGtleTogc3RyaW5nO1xuICAvKipcbiAgICogSHVtYW4gcmVhZGFibGUgbGFiZWwgZGVzY3JpYmluZyBrZXlcbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBDb252ZXJ0IHRhZyBsYWJlbCB0byBodW1hbiByZWFkYWJsZSBzdHJpbmdcbiAgICogQHBhcmFtIHYge2FueX0gVGFnIHZhbHVlXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IEh1bWFuIHJlYWRhYmxlIHN0cmluZ1xuICAgKi9cbiAgdG9UZXh0PzogKHZhbHVlOiBhbnkpID0+IHN0cmluZztcbiAga2V5UmVmPzogc3RyaW5nO1xuICB2YWx1ZVJlZj86ICh2YWx1ZTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBmb3JtYXRMYWJlbHM6IFRhZ0xhYmVsW10gPSBbXG4gIHtcbiAgICBrZXk6ICdkYXRhZm9ybWF0JyxcbiAgICBsYWJlbDogJ0RhdGEgZm9ybWF0J1xuICB9LCB7XG4gICAga2V5OiAndGFnVHlwZXMnLFxuICAgIGxhYmVsOiAnVGFnIGhlYWRlciB0eXBlKHMpJ1xuICB9LCB7XG4gICAga2V5OiAnZHVyYXRpb24nLFxuICAgIGxhYmVsOiAnRHVyYXRpb24nLFxuICAgIHRvVGV4dDogdiA9PiBNYXRoLnJvdW5kKHYgKiAxMDApIC8gMTAwICsgJyBzZWNvbmRzJ1xuICB9LCB7XG4gICAga2V5OiAnYml0cmF0ZScsXG4gICAgbGFiZWw6ICdCaXQtcmF0ZScsXG4gICAgdG9UZXh0OiB2ID0+IE1hdGgucm91bmQodiAvIDEwMDApICsgJyBrYnBzJ1xuICB9LCB7XG4gICAga2V5OiAnc2FtcGxlUmF0ZScsXG4gICAgbGFiZWw6ICdTYW1wbGUtcmF0ZScsXG4gICAgdG9UZXh0OiB2ID0+IE1hdGgucm91bmQodiAvIDEwMCkgLyAxMCArICcgaHonXG4gIH0sIHtcbiAgICBrZXk6ICdiaXRzUGVyU2FtcGxlJyxcbiAgICBsYWJlbDogJ0F1ZGlvIGJpdCBkZXB0aCdcbiAgfSwge1xuICAgIGtleTogJ2VuY29kZXInLFxuICAgIGxhYmVsOiAnRW5jb2RlciBuYW1lJ1xuICB9LCB7XG4gICAga2V5OiAnY29kZWNQcm9maWxlJyxcbiAgICBsYWJlbDogJ0NvZGVjIHByb2ZpbGUnXG4gIH0sIHtcbiAgICBrZXk6ICdsb3NzbGVzcycsXG4gICAgbGFiZWw6ICdMb3NzbGVzcz8nXG4gIH0sIHtcbiAgICBrZXk6ICdudW1iZXJPZkNoYW5uZWxzJyxcbiAgICBsYWJlbDogJ051bWJlciBvZiBjaGFubmVscydcbiAgfSwge1xuICAgIGtleTogJ2F1ZGlvTUQ1JyxcbiAgICBsYWJlbDogJ0F1ZGlvIE1ENSBoYXNoJ1xuICB9XG5dO1xuXG5jb25zdCBtYkJhc2VVcmwgPSAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcnO1xuXG5leHBvcnQgY29uc3QgY29tbW9uTGFiZWxzOiBUYWdMYWJlbFtdID0gW1xuICB7XG4gICAga2V5OiAndGl0bGUnLFxuICAgIGxhYmVsOiAnVHJhY2sgdGl0bGUnXG4gIH0sIHtcbiAgICBrZXk6ICd0aXRsZXNvcnQnLFxuICAgIGxhYmVsOiAnVHJhY2sgdGl0bGUsIGZvcm1hdHRlZCBmb3IgYWxwaGFiZXRpYyBvcmRlcmluZydcbiAgfSwge1xuICAgIGtleTogJ3N1YnRpdGxlJyxcbiAgICBsYWJlbDogJ0NvbnRhaW5zIHRoZSBzdWJ0aXRsZSBvZiB0aGUgY29udGVudCdcbiAgfSwge1xuICAgIGtleTogJ3dvcmsnLFxuICAgIGxhYmVsOiAnVGhlIGNhbm9uaWNhbCB0aXRsZSBvZiB0aGUgd29yaycsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL1dvcmsnXG4gIH0sIHtcbiAgICBrZXk6ICdncm91cGluZycsXG4gICAgbGFiZWw6ICdDb250ZW50IGdyb3VwIGRlc2NyaXB0aW9uLidcbiAgfSwge1xuICAgIGtleTogJ3RyYWNrJyxcbiAgICBsYWJlbDogJ1RyYWNrIG51bWJlcicsXG4gICAgdG9UZXh0OiB2ID0+IHYub2YgPyBgJHt2Lm5vfSAvICR7di5vZn1gIDogYCR7di5ub31gXG4gIH0sIHtcbiAgICBrZXk6ICd0b3RhbHRyYWNrcycsXG4gICAgbGFiZWw6ICdUaGUgdG90YWwgbnVtYmVyIG9mIHRyYWNrcydcbiAgfSwge1xuICAgIGtleTogJ2Rpc2snLFxuICAgIGxhYmVsOiAnRGlzayBvciBtZWRpYSBudW1iZXInLFxuICAgIHRvVGV4dDogdiA9PiB2Lm9mID8gYCR7di5ub30gLyAke3Yub2Z9YCA6IGAke3Yubm99YFxuICB9LCB7XG4gICAga2V5OiAndG90YWxkaXNjcycsXG4gICAgbGFiZWw6ICdUaGUgdG90YWwgbnVtYmVyIG9mIGRpc2NzJ1xuICB9LCB7XG4gICAga2V5OiAnZGlzY3N1YnRpdGxlJyxcbiAgICBsYWJlbDogJ1RoZSBNZWRpYSBUaXRsZSBnaXZlbiB0byBhIHNwZWNpZmljIGRpc2MnXG4gIH0sIHtcbiAgICBrZXk6ICdhcnRpc3QnLFxuICAgIGxhYmVsOiAnQXJ0aXN0J1xuICB9LCB7XG4gICAga2V5OiAnYXJ0aXN0cycsXG4gICAgbGFiZWw6ICdBcnRpc3RzJ1xuICB9LCB7XG4gICAga2V5OiAnYWxidW1hcnRpc3QnLFxuICAgIGxhYmVsOiAnQWxidW0gYXJ0aXN0J1xuICB9LCB7XG4gICAga2V5OiAnYXJ0aXN0c29ydCcsXG4gICAgbGFiZWw6ICdUcmFjayBhcnRpc3Qgc29ydCBuYW1lJ1xuICB9LCB7XG4gICAga2V5OiAnYWxidW1hcnRpc3Rzb3J0JyxcbiAgICBsYWJlbDogJ0FsYnVtIGFydGlzdCBzb3J0IG5hbWUnXG4gIH0sIHtcbiAgICBrZXk6ICdvcmlnaW5hbGFydGlzdCcsXG4gICAgbGFiZWw6ICdPcmlnaW5hbCB0cmFjayBhcnRpc3RzLidcbiAgfSwge1xuICAgIGtleTogJ2NvbXBvc2VyJyxcbiAgICBsYWJlbDogJ0NvbXBvc2VyJ1xuICB9LCB7XG4gICAga2V5OiAnY29tcG9zZXJzb3J0JyxcbiAgICBsYWJlbDogJ0NvbXBvc2VyLCBmb3JtYXR0ZWQgZm9yIGFscGhhYmV0aWMgb3JkZXJpbmcnXG4gIH0sIHtcbiAgICBrZXk6ICdseXJpY2lzdCcsXG4gICAgbGFiZWw6ICdMeXJpY2lzdCwgZm9ybWF0dGVkIGZvciBhbHBoYWJldGljIG9yZGVyaW5nJ1xuICB9LCB7XG4gICAga2V5OiAnd3JpdGVyJyxcbiAgICBsYWJlbDogJ1dyaXRlcidcbiAgfSwge1xuICAgIGtleTogJ2NvbmR1Y3RvcicsXG4gICAgbGFiZWw6ICdDb25kdWN0b3InXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1peGVyJyxcbiAgICBsYWJlbDogJ1JlbWl4ZXIocyknXG4gIH0sIHtcbiAgICBrZXk6ICdhcnJhbmdlcicsXG4gICAgbGFiZWw6ICdBcnJhbmdlcidcbiAgfSwge1xuICAgIGtleTogJ2VuZ2luZWVyJyxcbiAgICBsYWJlbDogJ0VuZ2luZWVyKHMpJ1xuICB9LCB7XG4gICAga2V5OiAncHJvZHVjZXInLFxuICAgIGxhYmVsOiAnUHJvZHVjZXIocyknXG4gIH0sIHtcbiAgICBrZXk6ICdkam1peGVyJyxcbiAgICBsYWJlbDogJ01peC1ESihzKSdcbiAgfSwge1xuICAgIGtleTogJ21peGVyJyxcbiAgICBsYWJlbDogJ01peGVkIGJ5J1xuICB9LCB7XG4gICAga2V5OiAndGVjaG5pY2lhbicsXG4gICAgbGFiZWw6ICdUZWNobmljaWFuIHdobyBkaWdpdGl6ZWQgc3ViamVjdCdcbiAgfSwge1xuICAgIGtleTogJ3BlcmZvcm1lcjppbnN0cnVtZW50JyxcbiAgICBsYWJlbDogJ1BlcmZvcm1lciByZWxhdGlvbnNoaXAgdHlwZXMsIGluc3RydW1lbnQgY2FuIGFsc28gYmUgdm9jYWxzLidcbiAgfSwge1xuICAgIGtleTogJ3llYXInLFxuICAgIGxhYmVsOiAnUmVsZWFzZSB5ZWFyJ1xuICB9LCB7XG4gICAga2V5OiAnYWxidW0nLFxuICAgIGxhYmVsOiAnQWxidW0nXG4gIH0sIHtcbiAgICBrZXk6ICdhbGJ1bXNvcnQnLFxuICAgIGxhYmVsOiAnQWxidW0gdGl0bGUsIGZvcm1hdHRlZCBmb3IgYWxwaGFiZXRpYyBvcmRlcmluZydcbiAgfSwge1xuICAgIGtleTogJ29yaWdpbmFsYWxidW0nLFxuICAgIGxhYmVsOiAnT3JpZ2luYWwgcmVsZWFzZSB0aXRsZSdcbiAgfSwge1xuICAgIGtleTogJ2NvbXBpbGF0aW9uJyxcbiAgICBsYWJlbDogJ0lzIHBhcnQgb2YgY29tcGlsYXRpb24nXG4gIH0sIHtcbiAgICBrZXk6ICdkYXRlJyxcbiAgICBsYWJlbDogJ1JlbGVhc2UgZGF0ZSdcbiAgfSwge1xuICAgIGtleTogJ29yaWdpbmFsZGF0ZScsXG4gICAgbGFiZWw6ICdPcmlnaW5hbCByZWxlYXNlIGRhdGUnXG4gIH0sIHtcbiAgICBrZXk6ICdvcmlnaW5hbHllYXInLFxuICAgIGxhYmVsOiAnT3JpZ2luYWwgcmVsZWFzZSB5ZWFyJyxcbiAgfSwge1xuICAgIGtleTogJ21lZGlhJyxcbiAgICBsYWJlbDogJ1JlbGVhc2UgRm9ybWF0J1xuICB9LCB7XG4gICAga2V5OiAnbGFiZWwnLFxuICAgIGxhYmVsOiAnUmVsZWFzZSBsYWJlbCBuYW1lKHMpJ1xuICB9LCB7XG4gICAga2V5OiAnY2F0YWxvZ251bWJlcicsXG4gICAgbGFiZWw6ICdSZWxlYXNlIGNhdGFsb2cgbnVtYmVyKHMpJyxcbiAgICBrZXlSZWY6ICdodHRwczovL211c2ljYnJhaW56Lm9yZy9kb2MvUmVsZWFzZS9DYXRhbG9nX051bWJlcidcbiAgfSwge1xuICAgIGtleTogJ2dlbnJlJyxcbiAgICBsYWJlbDogJ0dlbnJlcydcbiAgfSwge1xuICAgIGtleTogJ21vb2QnLFxuICAgIGxhYmVsOiAnS2V5d29yZHMgdG8gcmVmbGVjdCB0aGUgbW9vZCBvZiB0aGUgYXVkaW8nXG4gIH0sIHtcbiAgICBrZXk6ICdjb21tZW50JyxcbiAgICBsYWJlbDogJ0NvbW1lbnRzJ1xuICB9LCB7XG4gICAga2V5OiAnbm90ZXMnLFxuICAgIGxhYmVsOiAnTm90ZXMnXG4gIH0sIHtcbiAgICBrZXk6ICdseXJpY3MnLFxuICAgIGxhYmVsOiAnTHlyaWNpc3QnXG4gIH0sIHtcbiAgICBrZXk6ICdrZXknLFxuICAgIGxhYmVsOiAnSW5pdGlhbCBrZXknXG4gIH0sIHtcbiAgICBrZXk6ICdyYXRpbmcnLFxuICAgIGxhYmVsOiAnT2JqZWN0IGhvbGRpbmcgcmF0aW5nIHNjb3JlIFswLi4xXSdcbiAgfSwge1xuICAgIGtleTogJ2JwbScsXG4gICAgbGFiZWw6ICdCZWF0cyBQZXIgTWludXRlIChCUE0pJ1xuICB9LCB7XG4gICAga2V5OiAnc2hvdycsXG4gICAgbGFiZWw6ICdUViBzaG93IHRpdGxlJ1xuICB9LCB7XG4gICAga2V5OiAnc2hvd3NvcnQnLFxuICAgIGxhYmVsOiAnVFYgc2hvdyBzb3J0aW5nIHRpdGxlJ1xuICB9LCB7XG4gICAga2V5OiAncG9kY2FzdCcsXG4gICAgbGFiZWw6ICdUb0RvJyxcbiAgICBrZXlSZWY6ICdodHRwczovL2dpdGh1Yi5jb20vQm9yZXdpdC9tdXNpYy1tZXRhZGF0YS9pc3N1ZXMvMTMnXG4gIH0sIHtcbiAgICBrZXk6ICdwb2RjYXN0dXJsJyxcbiAgICBsYWJlbDogJ1RvRG8nLFxuICAgIGtleVJlZjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Cb3Jld2l0L211c2ljLW1ldGFkYXRhL2lzc3Vlcy8xMydcbiAgfSwge1xuICAgIGtleTogJ3JlbGVhc2VzdGF0dXMnLFxuICAgIGxhYmVsOiAnUmVsZWFzZXMgc3RhdHVzJyxcbiAgICBrZXlSZWY6IG1iQmFzZVVybCArICcvSGlzdG9yeTpSZWxlYXNlX1N0YXR1cydcbiAgfSwge1xuICAgIGtleTogJ3JlbGVhc2V0eXBlJyxcbiAgICBsYWJlbDogJ1JlbGVhc2UgdHlwZScsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL1JlbGVhc2VfR3JvdXAvVHlwZSdcbiAgfSwge1xuICAgIGtleTogJ3JlbGVhc2Vjb3VudHJ5JyxcbiAgICBsYWJlbDogJ1JlbGVhc2UgY291bnRyeScsXG4gICAga2V5UmVmOiBtYkJhc2VVcmwgKyAnL1JlbGVhc2VfQ291bnRyeSdcbiAgfSwge1xuICAgIGtleTogJ2JhcmNvZGUnLFxuICAgIGxhYmVsOiAnUmVsZWFzZSBiYXJjb2RlJyxcbiAgICBrZXlSZWY6ICdodHRwczovL211c2ljYnJhaW56Lm9yZy9kb2MvQmFyY29kZScsXG4gICAgdmFsdWVSZWY6ICh2KSA9PiAnaHR0cHM6Ly93d3cuYmFyY29kZWxvb2t1cC5jb20vJyArIHZcbiAgfSwge1xuICAgIGtleTogJ2lzcmMnLFxuICAgIGxhYmVsOiAnSVNSQycsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL0lTUkMnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gJ2h0dHBzOi8vaXNyY3NlYXJjaC5pZnBpLm9yZy8jIS9zZWFyY2g/aXNyY0NvZGU9JyArIHYgKyAnJnRhYj1sb29rdXAmc2hvd1JlbGVhc2VzPTAmc3RhcnQ9MCZudW1iZXI9MTAnXG4gIH0sIHtcbiAgICBrZXk6ICdhc2luJyxcbiAgICBsYWJlbDogJ0FTSU4nLFxuICAgIGtleVJlZjogJ2h0dHBzOi8vbXVzaWNicmFpbnoub3JnL2RvYy9BU0lOJ1xuICB9LCB7XG5cbiAgICBrZXk6ICdzY3JpcHQnLFxuICAgIGxhYmVsOiAnUmVsZWFzZSBTY3JpcHQnLFxuICAgIGtleVJlZjogJ2h0dHBzOi8vcGljYXJkLm11c2ljYnJhaW56Lm9yZy9kb2NzL3RhZ3MvJ1xuICB9LCB7XG4gICAga2V5OiAnbGFuZ3VhZ2UnLFxuICAgIGxhYmVsOiAnTGFuZ3VhZ2UgdXNlZCBpbiBtZXRhZGF0YSdcbiAgfSwge1xuICAgIGtleTogJ2NvcHlyaWdodCcsXG4gICAgbGFiZWw6ICdDb3B5cmlnaHQuJ1xuICB9LCB7XG4gICAga2V5OiAnbGljZW5zZScsXG4gICAgbGFiZWw6ICdMaWNlbnNlJ1xuICB9LCB7XG4gICAga2V5OiAnZW5jb2RlZGJ5JyxcbiAgICBsYWJlbDogJ0VuY29kZWQgYnkgKHBlcnNvbi9vcmdhbmlzYXRpb24pJ1xuICB9LCB7XG4gICAga2V5OiAnZW5jb2RlcnNldHRpbmdzJyxcbiAgICBsYWJlbDogJ0VuY29kZXIgU2V0dGluZ3MnXG4gIH0sIHtcbiAgICBrZXk6ICdnYXBsZXNzJyxcbiAgICBsYWJlbDogJ0dhcGxlc3MgYWxidW0gaW5kaWNhdG9yJ1xuICB9LCB7XG4gICAga2V5OiAnbXVzaWNicmFpbnpfcmVjb3JkaW5naWQnLFxuICAgIGxhYmVsOiAnUmVsZWFzZSByZWNvcmRpbmcgTUJJRCcsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL1JlY29yZGluZycsXG4gICAgdmFsdWVSZWY6ICh2KSA9PiBtYkJhc2VVcmwgKyAnL3JlY29yZGluZy8nICsgdlxuICB9LCB7XG4gICAga2V5OiAnbXVzaWNicmFpbnpfdHJhY2tpZCcsXG4gICAgbGFiZWw6ICdSZWxlYXNlIHRyYWNrIE1CSUQnLFxuICAgIGtleVJlZjogJ2h0dHBzOi8vbXVzaWNicmFpbnoub3JnL2RvYy9NdXNpY0JyYWluel9JZGVudGlmaWVyJyxcbiAgICB2YWx1ZVJlZjogKHYpID0+IG1iQmFzZVVybCArICcvcmVjb3JkaW5nLycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdtdXNpY2JyYWluel9hbGJ1bWlkJyxcbiAgICBsYWJlbDogJ0FsYnVtIHJlbGVhc2UgTUJJRCcsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL1JlbGVhc2UnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gbWJCYXNlVXJsICsgJy9yZWxlYXNlLycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdtdXNpY2JyYWluel9hcnRpc3RpZCcsXG4gICAgbGFiZWw6ICdUcmFjayBhcnRpc3RzIE1CSURzJyxcbiAgICBrZXlSZWY6ICdodHRwczovL211c2ljYnJhaW56Lm9yZy9kb2MvQXJ0aXN0JyxcbiAgICB2YWx1ZVJlZjogKHYpID0+IG1iQmFzZVVybCArICcvYXJ0aXN0LycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdtdXNpY2JyYWluel9hbGJ1bWFydGlzdGlkJyxcbiAgICBsYWJlbDogJ0FsYnVtIGFydGlzdHMnLFxuICAgIGtleVJlZjogJ2h0dHBzOi8vbXVzaWNicmFpbnoub3JnL2RvYy9BcnRpc3QnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gbWJCYXNlVXJsICsgJy9hcnRpc3QvJyArIHZcbiAgfSwge1xuICAgIGtleTogJ211c2ljYnJhaW56X3JlbGVhc2Vncm91cGlkJyxcbiAgICBsYWJlbDogJ1JlbGVhc2UgZ3JvdXAgTUJJRCcsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL1JlbGVhc2VfR3JvdXAnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gbWJCYXNlVXJsICsgJy9yZWxlYXNlLWdyb3VwLycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdtdXNpY2JyYWluel93b3JraWQnLFxuICAgIGxhYmVsOiAnV29yayBNQklEJyxcbiAgICBrZXlSZWY6ICdodHRwczovL211c2ljYnJhaW56Lm9yZy9kb2MvV29yaycsXG4gICAgdmFsdWVSZWY6ICh2KSA9PiBtYkJhc2VVcmwgKyAnL3dvcmsvJyArIHZcbiAgfSwge1xuICAgIGtleTogJ211c2ljYnJhaW56X3RybWlkJyxcbiAgICBsYWJlbDogJ1RSTSBBY291c3RpYyBJRCcsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9tdXNpY2JyYWluei5vcmcvZG9jL0ZpbmdlcnByaW50aW5nI1RSTSdcbiAgfSwge1xuICAgIGtleTogJ211c2ljYnJhaW56X2Rpc2NpZCcsXG4gICAgbGFiZWw6ICdEaXNjIElEJyxcbiAgICBrZXlSZWY6ICdodHRwczovL211c2ljYnJhaW56Lm9yZy9kb2MvRGlzY19JRCdcbiAgfSwge1xuICAgIGtleTogJ2Fjb3VzdGlkX2lkJyxcbiAgICBsYWJlbDogJ0Fjb3VzdCBJRCcsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQWNvdXN0aWNfZmluZ2VycHJpbnQnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gJ2h0dHBzOi8vYWNvdXN0aWQub3JnL3RyYWNrLycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdhY291c3RpZF9maW5nZXJwcmludCcsXG4gICAgbGFiZWw6ICdBY291c3RJRCBGaW5nZXJwcmludCcsXG4gICAga2V5UmVmOiAnaHR0cHM6Ly9hY291c3RpZC5vcmcvJ1xuICB9LCB7XG4gICAga2V5OiAnbXVzaWNpcF9wdWlkJyxcbiAgICBsYWJlbDogJ1BVSURzJyxcbiAgICBrZXlSZWY6ICdodHRwczovL211c2ljYnJhaW56Lm9yZy9kb2MvRmluZ2VycHJpbnRpbmcjUFVJRCdcbiAgfSwge1xuICAgIGtleTogJ211c2ljaXBfZmluZ2VycHJpbnQnLFxuICAgIGxhYmVsOiAnTXVzaWNJUCBGaW5nZXJwcmludCksIG5vdCBzdXJlIHdoaWNoIGFsZ29yaXRobS4nXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNjb2dzX2FydGlzdF9pZCcsXG4gICAgbGFiZWw6ICdEaXNjb2dzIGFydGlzdCBJRCcsXG4gICAgdmFsdWVSZWY6ICh2KSA9PiAnaHR0cHM6Ly93d3cuZGlzY29ncy5jb20vYXJ0aXN0LycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNjb2dzX2xhYmVsX2lkJyxcbiAgICBsYWJlbDogJ0Rpc2NvZ3MgbGFiZWwgSUQnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gJ2h0dHBzOi8vd3d3LmRpc2NvZ3MuY29tL2xhYmVsLycgKyB2XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNjb2dzX21hc3Rlcl9yZWxlYXNlX2lkJyxcbiAgICBsYWJlbDogJ0Rpc2NvZ3MgbWFzdGVyIHJlbGVhc2UgSUQnLFxuICAgIHZhbHVlUmVmOiAodikgPT4gJ2h0dHBzOi8vd3d3LmRpc2NvZ3MuY29tL21hc3Rlci8nICsgdlxuICB9LCB7XG4gICAga2V5OiAnZGlzY29nc192b3RlcycsXG4gICAgbGFiZWw6ICdEaXNjb2dzIHZvdGVzJ1xuICB9LCB7XG4gICAga2V5OiAnZGlzY29nc19yYXRpbmcnLFxuICAgIGxhYmVsOiAnRGlzY29ncyByYXRpbmcnXG4gIH0sIHtcbiAgICBrZXk6ICdkaXNjb2dzX3JlbGVhc2VfaWQnLFxuICAgIGxhYmVsOiAnRGlzY29ncyByZWxlYXNlIGlkZW50aWZpZXInLFxuICAgIHZhbHVlUmVmOiAodikgPT4gJ2h0dHBzOi8vd3d3LmRpc2NvZ3MuY29tL3JlbGVhc2UvJyArIHZcbiAgfSwge1xuICAgIGtleTogJ3dlYnNpdGUnLFxuICAgIGxhYmVsOiAnVVJMIG9mIHdlYnNpdGUnXG4gIH0sIHtcbiAgICBrZXk6ICdhdmVyYWdlTGV2ZWwnLFxuICAgIGxhYmVsOiAnQXZlcmFnZSBnYWluIGxldmVsLidcbiAgfSwge1xuICAgIGtleTogJ3BlYWtMZXZlbCcsXG4gICAgbGFiZWw6ICdQZWFrIGdhaW4gbGV2ZWwuJ1xuICB9LCB7XG4gICAga2V5OiAncmVwbGF5Z2Fpbl90cmFja19wZWFrJyxcbiAgICBsYWJlbDogJ1JlcGxheSB0cmFjayBwZWFrJ1xuICB9LCB7XG4gICAga2V5OiAncmVwbGF5Z2Fpbl90cmFja19nYWluJyxcbiAgICBsYWJlbDogJ1JlcGxheSB0cmFjayBnYWluJ1xuICB9LCB7XG4gICAga2V5OiAnZGVzY3JpcHRpb24nLFxuICAgIGxhYmVsOiAnRGVzY3JpcHRpb24nXG4gIH0sIHtcbiAgICBrZXk6ICd0dlNob3cnLFxuICAgIGxhYmVsOiAnVFYgU2hvdydcbiAgfSwge1xuICAgIGtleTogJ3R2U2hvd1NvcnQnLFxuICAgIGxhYmVsOiAnVFYgc2hvdyB0aXRsZSAoYWxwaGFiZXRpYyknXG4gIH0sIHtcbiAgICBrZXk6ICd0dlNlYXNvbicsXG4gICAgbGFiZWw6ICdUViBTZWFzb24nXG4gIH0sIHtcbiAgICBrZXk6ICd0dkVwaXNvZGUnLFxuICAgIGxhYmVsOiAnVFYgRXBpc29kZSdcbiAgfSwge1xuICAgIGtleTogJ3R2RXBpc29kZUlkJyxcbiAgICBsYWJlbDogJ1RWIEVwaXNvZGUgSUQnXG4gIH0sIHtcbiAgICBrZXk6ICd0dk5ldHdvcmsnLFxuICAgIGxhYmVsOiAnVFYgTmV0d29yaydcbiAgfS8qLCB7XG4gICAga2V5OiAncGljdHVyZScsXG4gICAgbGFiZWw6ICdFbWJlZGRlZCBjb3ZlciBhcnQnXG4gIH0qL1xuXTtcbiJdfQ==