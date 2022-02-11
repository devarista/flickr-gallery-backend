# Flickr Gallery API

## Installation

1. Clone this git repo.

    ```sh
    git clone https://github.com/devarista/flickr-gallery-backend.git
    ```

1. Install the dependencies

    ```bash
    npm install
    ```

1. Create `.env` file into root directory and add the following values to it.

    ```sh
    PORT=3001
    FLICKR_URL=https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
    NODE_ENV=dev
    ```

1. Start the server by run this command.

    ```sh
    # for development
    npm run dev
    # or for production
    npm run start
    ```

1. Open your browser and go to `localhost:3001`.
