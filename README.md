# Reducks

[![Build Status](https://travis-ci.org/rogeruiz/reducks.svg?branch=master)](https://travis-ci.org/rogeruiz/reducks)

```
			           ,-.
         ,--' ~.).
       ,'         `.
      ; (((__   __)))
      ;  ( (#) ( (#)
      |   \_/___\_/|
     ,"  ,-'    `__".           .
    (   ( ._   ____`.)--._        _
     `._ `-.`-' \(`-'  _  `-. _,-' `-/`.
      ,')   `.`._))  ,' `.   `.  ,','  ;
    .'   .    `--'  /     ).   `.      ;
   ;      `-       /     '  )         ;
   \                       ')       ,'
    \                     ,'       ;
     \               `~~~'       ,'
      `.                      _,'
quack!  `.                ,--'
          `-._________,--'
```

Reducks is a tool to create animated visualizations of work on either a single
repository, or a series of repositories that match a regular expression pattern,
to help give a different perspective of work done in git. Consider it like
rubber-ducking for your workflows and processes for teams.

Reducks uses a few visualization tools to generate gifs and videos using
open-source projects like `Gource` and `Code_Swarm` to visualize contribution to
projects.

## Important notice about diversity and meritocracy

Reducks is neither trying to shame project members into contributing more nor
reward consistent / constant committers to a project. This is supposed to be a
fun little tool which displays commit history in yet another medium. This tool
runs the same risks of being used like the GitHub contribution graph, which has
been said to be harmful to contributors on various occasions.

### Links about burnout, gamification and the contribution graph

The links below are some writing and discussion on the Github contribution
graph.

- https://news.ycombinator.com/item?id=11404482 "Hacker News submission / discussion about the GitHub issue"
- https://github.com/isaacs/github/issues/627 "GitHub issue talking about the Graph being bad"
- http://erik.io/blog/2016/04/01/how-github-contribution-graph-is-harmful/ "Blog post about how harmful the graph is"
- https://zachholman.com/posts/streaks/ "Blog post about streaks and gamification"
- http://geoff.greer.fm/2015/01/07/burnout-is-in-the-mind/ "Blog post about how burnout is in the mind"

### Knowing what this tool could be used for, how is it different?

Reducks is not envisioned as a meritocracy tool. The default configuration will
only generate anonymized visualizations which show the work being done without
singling out individuals on a project.

This tool is meant to be used is to help visualize contributions to a sprint.
It's yet another medium to display how we work on projects to people outside the
project itself. This makes it a useful tool for debriefing and retrospectives.

As with anything dealing with exposing how something is made, remember to use
caution and empathy. Revealing how the soup is made can sometimes put a bad
taste in one's mouth. Ignorance is bliss and all that.

## Installation

In order to use Reducks, you will need to install `gource` and `ffmpeg`. If
you're using macOS and Homebrew, you should be able to easily install them with
the following commands.

```shell
brew install gource
brew install ffmpeg
```

After those dependencies are met, you should be able to run the scripts in the
`source/` directories to create visualizations, animated gifs, or mpeg videos
for your repositories.

### Better guidance around use

```shell
npm install
```

Once everything is installed you can run the tests which will run against the
current repository.

```shell
npm test
```

To generate a configuration file against the current repository, you can simply
start.

```shell
npm start
```

## Development

Please refer to the [contributing documentation](CONTRIBUTING.md).

## License

Please refer to the [license documentation](LICENSE.md).

## Dependencies

Please refer to the [dependencies documentation](DEPENDENCIES.md).
