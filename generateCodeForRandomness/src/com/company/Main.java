package com.company;

import java.io.*;

public class Main {
    public static final String TEMPLATE = "%number";

    public static void main(String[] args) throws IOException {
        BufferedReader footerReader = new BufferedReader(new FileReader("template/footer.txt"));
        BufferedReader asciiReader = new BufferedReader(new FileReader("template/template_ascii.txt"));
        BufferedReader colorReader = new BufferedReader(new FileReader("template/template_color.txt"));
        BufferedReader elementReader = new BufferedReader(new FileReader("template/template.txt"));
        BufferedReader headerReader = new BufferedReader(new FileReader("template/header.txt"));
        BufferedWriter jsWriter = new BufferedWriter(new FileWriter("output/index.js"));
        BufferedWriter htmlWriter = new BufferedWriter(new FileWriter("output/index.html"));
        BufferedReader jsReader = null;

        jsWriter.append(asciiReader.readLine());
        jsWriter.append("\n");
        jsWriter.append(colorReader.readLine());
        jsWriter.append("\n");
        for (int j = 0; j < 5; j++) {
            jsReader = new BufferedReader(new FileReader("template/template_js.txt"));
            while (jsReader.ready()) {
                jsWriter.append(jsReader.readLine().replace(TEMPLATE, Integer.toString(j)));
                jsWriter.append("\n");
            }
        }

        // write to html
        //header
        while (headerReader.ready()) {
            htmlWriter.append(headerReader.readLine());
            htmlWriter.append("\n");
        }
        htmlWriter.write("\n");
        //write body svg
        String element = elementReader.readLine();
        for (int i = 0; i < 5; i++) {
            htmlWriter.append(element.replace(TEMPLATE, Integer.toString(i)));
            htmlWriter.append("\n");
        }
        //write footer
        while (footerReader.ready()) {
            htmlWriter.append(footerReader.readLine());
            htmlWriter.append("\n");
        }
        elementReader.close();
        colorReader.close();
        asciiReader.close();
        footerReader.close();
        headerReader.close();
        htmlWriter.close();
        jsWriter.close();
        jsReader.close();
    }
}
