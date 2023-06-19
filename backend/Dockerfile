FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build

# Set working Dir
# Copy ur Code u wanna build
# (restore, build, test), publish ur dotnet code into a (portable) artifact folder

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS runtime

# set working dir
# Get published Code / Artifact Folder from previous Layer
# Set Entrypoint
# Expose port (it's 80)