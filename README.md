# 2770 Dungeons

A small experiment in creating a backend/frontend service for my Dungeons & Dragons group. 

Note: The backend only needs to be running when using the "Initiative" service.



## Backend

1. Ensure that you have `uv` installed (see https://docs.astral.sh/uv/getting-started/installation/):
2. Install requirements:
```bash
uv sync
```

Then start the backend server by calling:

```bash
uv run run.py
```



### Frontend

To run the frontend service, navigate to the `frontend` directory and install the needed requirements (assuming you already have npm):

```bash
npm install
```

To start the frontend service is development mode (with hot reloading), run:

```bash
npm run start
```

To create a "production-ready" build, run:

```bash
npm run build
```
The output will be placed in the `build` directory.


#### License

This project is licensed under the terms of the MIT license.

All data is courtesy of https://github.com/TheGiddyLimit/TheGiddyLimit.github.io
