# Challenge 06. Application with React Native

In this challenge we will add new features in the application that we developed.

## GitHub

App to manage favorites users from GitHub

## Features

### Loading repositories

Add a loading indicator using `<ActivityIndicator />` before loading the list of starred repositories on the User details screen.

### Infinite Scroll

Add an infinite scroll functionality in the list of starred repositories. As soon as the user reaches the **20%** end of the list, search for the items on the next page and add them to the list. Your code will look like this:

```js
<Stars
  onEndReachedThreshold={0.2} // Load more items when user reaches 20% end of list
  onEndReached={this.loadMore} // Function that loads more items
  // ...props
>
```

To request a new page in Github use a `page` parameter at the end of the URL:

```
https://api.github.com/users/diegomais/starred?page=2
```

### Pull to Refresh

Add a feature for when the user pull the list of starred repositories down to refresh the list by resetting the state, that is, return the paging state to page 1 displaying only the first 30 items.

The "Pull to Refresh" functionality exists by default in the FlatList and can be implemented through the following code:

```js
<Stars
  onRefresh={this.refreshList} // Function starts when the user pull the list down
  refreshing={this.state.refreshing} // Variable that stores a true / false state that represents whether the list is updating
  // ...props
>
```

### WebView

Create a new page in the application that will be accessed when the user clicks on a starred repository, that page should contain only the Header of the application. The content of the page will be a WebView, that is, an embedded browser that displays the `html_url` attribute present in the repository object that comes from the Github API.

WebView Usage Documentation: https://github.com/react-native-community/react-native-webview/blob/master/docs/Getting-Started.md

Code sample:

```js
<WebView
  source={{ uri: repository.html_url }}
  style={{ flex: 1 }}
/>
```

Result:

![WebView](assets/example-web-view.png)

## Submit

This challenge **does not need to be delivered** and will not receive correction, but you can see the result of the challenge code here: https://github.com/Rocketseat/bootcamp-gostack-desafio-06

"Just wish for the things you're willing to fight for!"

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need Node, Watchman, the React Native command line interface, and Xcode.

#### Node, Watchman, JDK

We recommend installing Node, Watchman, and JDK using Homebrew. Run the following commands in a Terminal after installing Homebrew:

```
brew install node
brew install watchman
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
```

If you have already installed Node on your system, make sure it is Node 8.3 or newer.

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance.

If you have already installed JDK on your system, make sure it is JDK 8 or newer.

#### React Native CLI

Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Terminal:

```
npm install -g react-native-cli
```

#### Xcode

The easiest way to install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app.

If you have already installed Xcode on your system, make sure it is version 9.4 or newer.

##### Command Line Tools

You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

### Installing

To download the project follow the instructions bellow:

```
1. git clone https://github.com/diegomais/rocketseat-bootcamp-gostack-challenge-06-github-react-native.git
2. cd rocketseat-bootcamp-gostack-challenge-06-github-react-native
```

* Start the application

```
3. npm install
4. react-native run-ios
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
