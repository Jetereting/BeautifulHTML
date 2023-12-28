package main

import (
	"flag"
	"github.com/Jetereting/goutil"
	"github.com/gin-gonic/gin"
	"os"
	"path"
)

var port = flag.String("port", ":2000", "端口")

func main() {
	flag.Parse()
	gin.SetMode(gin.ReleaseMode)
	r := gin.New()
	html, err := os.ReadDir("html")
	if err != nil {
		panic(err)
	}
	var arrHtml []string
	for _, v := range html {
		if !v.IsDir() {
			continue
		}
		dName := v.Name()
		arrHtml = append(arrHtml, dName)
		r.Static(v.Name(), path.Join("html", dName))
	}
	if len(arrHtml) == 0 {
		panic("html目录下没有文件夹")
	}
	r.GET("/", func(c *gin.Context) {
		randomHtml := goutil.StrArr(arrHtml).Random2Arr()[0]
		c.Redirect(302, randomHtml)
	})
	_ = r.Run(*port)
}
