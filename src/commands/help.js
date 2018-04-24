const chalk = require ("chalk")

function help ( context ) {
	context.log (`MageRepo is made possible by ${chalk.green.bold (">")}${chalk.white.bold ("jet")}${chalk.gray.bold ("rails")}${chalk.green.bold ("_")}`)
	context.log (``)
	context.log (`${chalk.bold ("usage")}:`)
	context.log (`  magerepo [${chalk.yellow ("...flags")}] <${chalk.green ("command")}> [${chalk.blue ("...options")}]`)
	context.log (``)
	context.log (`${chalk.bold ("commands")}:`)
	context.log (`  ${chalk.green ("release")}                looking for release`)
	context.log (`  ${chalk.green ("patch")}                  looking for patches`)
	context.log (`  ${chalk.green ("auth")}                   Store magerepo credentials`)
	context.log (`  ${chalk.green ("unauth")}                 Remove stored credentials`)
	context.log (``)
	context.log (`${chalk.bold ("flags")}:`)
	context.log (`  ${chalk.yellow ("-h")}, ${chalk.yellow ("--help")}             Display help menu`)
	context.log (`  ${chalk.yellow ("-v")}, ${chalk.yellow ("--version")}          Display version`)
	context.log (`  ${chalk.yellow ("-q")}, ${chalk.yellow ("--quiet")}            Do not display anything`)
	context.log (`  ${chalk.yellow ("-u")}, ${chalk.yellow ("--unicode")}          Only display unicode characters`)
	context.log (`  ${chalk.yellow ("-c")}, ${chalk.yellow ("--clean")}            Delete all archives before exiting`)
	context.log (``)
	context.log (`${chalk.bold ("options")}:`)
	context.log (`  ${chalk.blue ("-e")}, ${chalk.blue ("--edition")}          Specify edition [ce|ee]`)
	context.log (`  ${chalk.blue ("-r")}, ${chalk.blue ("--release")}          Specify release, i.e. 1.9.3.1`)
	context.log (`  ${chalk.blue ("-p")}, ${chalk.blue ("--patch")}            Specify patch name, i.e. supee-1000-v1`)
	context.log (`  ${chalk.blue ("-d")}, ${chalk.blue ("--download")} [path]  Download results, optionally specify path`)
	context.log (`  ${chalk.blue ("-x")}, ${chalk.blue ("--extract")}  [path]  Extract, default extracted at download location`)
	context.log (``)
	context.log (`examples:`)
	context.log (`  magerepo ${chalk.green ("auth")}`)
	context.log (`  magerepo ${chalk.green ("unauth")}`)
	context.log (`  magerepo ${chalk.green ("release")}`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} x`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 2.x`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.x ${chalk.blue ("-d")} ${chalk.blue ("-x")}`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1 ${chalk.blue ("-d")} ${chalk.blue ("-x")} ${chalk.blue ("-c")}`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1 ${chalk.blue ("-d")} /var/www/html`)
	context.log (`  magerepo ${chalk.green ("release")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1 ${chalk.blue ("-d")} /var/www ${chalk.blue ("-x")} /var/www/html`)
	context.log (`  magerepo ${chalk.green ("patch")}`)
	context.log (`  magerepo ${chalk.green ("patch")} ${chalk.blue ("-e")} ce`)
	context.log (`  magerepo ${chalk.green ("patch")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1`)
	context.log (`  magerepo ${chalk.green ("patch")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1 ${chalk.blue ("-p")} supee-1000-v1`)
	context.log (`  magerepo ${chalk.green ("patch")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1 ${chalk.blue ("-d")}`)
	context.log (`  magerepo ${chalk.green ("patch")} ${chalk.blue ("-e")} ce ${chalk.blue ("-r")} 1.9.3.1 ${chalk.blue ("-p")} supee-1000-v1 ${chalk.blue ("-d")}`)
}

module.exports = help
