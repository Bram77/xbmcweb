function VideoPlaylist (Playlist)
{
    //Namespace configuration
    var s_media = 'video';

    //XBMC method implementations
    this.play = function ()
    {
        return Playlist.play(s_media);
    }

    this.skipPrevious = function ()
    {
        return Playlist.skipPrevious(s_media);
    }

    this.skipNext = function ()
    {
        return Playlist.skipNext(s_media);
    }
    
    this.getCurrentPlaylist = function ()
    {
        return Playlist.getCurrentPlaylist(s_media);
    }

        this.getItems = function ()
        {
            return Playlist.getItems(s_media);
        }

        this.getCurrentItemIndex = function ()
        {
            return Playlist.getCurrentItemIndex(s_media);
        }

        this.getCurrentItem = function ()
        {
            return Playlist.getCurrentItem(s_media);
        }

        this.getItemCount = function ()
        {
            return Playlist.getItemCount(s_media);
        }

    this.shuffle = function ()
    {
        return Playlist.shuffle(s_media);
    }

    this.unShuffle = function ()
    {
        return Playlist.unShuffle(s_media);
    }

    this.addFile = function (s_file)
    {
        return Playlist.addFile(s_file, s_media);
    }

    this.addDirectory = function (s_directory, b_recursive)
    {
        return Playlist.addDirectory(s_directory, s_media, b_recursive);
    }

    this.playDirectory = function (s_directory, b_recursive)
    {
        this.clear();
        this.addDirectory(s_directory, b_recursive);
        this.play(0);
    }

    this.clear = function ()
    {
        return Playlist.clear(s_media);
    }

    this.create = function (s_file)
    {
        return Playlist.create(s_file, s_media);
    }

    this.destroy = function (s_file)
    {
        return Playlist.destroy(s_file, s_media);
    }

    this.remove = function (i_item)
    {
        return Playlist.remove(i_item, s_media);
    }

    this.swap = function (i_item1, i_item2)
    {
        return Playlist.swap(i_item1, i_item2, s_media);
    }
}