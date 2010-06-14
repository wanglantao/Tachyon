/**
@fileOverview
Implementation of control-flow graphs and basic blocks

@author
Maxime Chevalier-Boisvert

@copyright
Copyright (c) 2010 Maxime Chevalier-Boisvert, All Rights Reserved
*/

/**
@class Class to represent control-flow graph
@author Maxime Chevalier-Boisvert
*/
function ControlFlowGraph()
{
    /**
    Construct a string representation
    */
    this.toString = function ()
    {
        var output = "";

        for (var i = 0; i < this.blocks.length; ++i)
        {
            block = this.blocks[i];

            output += block;

            if (block !== this.blocks[this.blocks.length - 1])
                output += "\n\n";
        }

        return output;
    }

    /**
    Get a temporary name that is free inside the cfg
    */
    this.getTmpName = function ()
    {
        return "$t_" + this.nextTmpIdx;
    }

    /**
    Get a basic block name that is free inside the cfg
    */
    this.getBlockName = function ()
    {
        return "block_" + this.nextBlockIdx;
    }

    /**
    Create a block in this CFG
    */
    this.getNewBlock = function ()
    {
        block = new BasicBlock(this);

        this.blocks.push(block);

        return block;
    }

    /**
    Get/create the entry block for this CFG
    */
    this.getEntryBlock = function ()
    {
        if (!this.entry)
        {
            this.entry = this.getNewBlock();
            this.entry.label = "entry";
        }

        return this.entry;
    }

    /**
    Entry basic block
    @field
    */
    this.entry = null;

    /**
    Basic blocks contained in this CFG
    */
    this.blocks = [];

    /**
    Next free temp name index
    @field
    */
    this.nextTmpIdx = 0;

    /**
    Next free block name index
    @field
    */
    this.nextBlockIdx = 0;
}

/**
@class Class to represent a basic block
@author Maxime Chevalier-Boisvert
*/
function BasicBlock(cfg)
{
    /**
    Produce a string representation
    */
    this.toString = function()
    {
        var output = this.label + ":\n";

        for (var i = 0; i < this.instrs.length; ++i)
        {
            var instr = this.instrs[i];

            // If the instruction is unnamed, give it a free name
            if (!instr.outName)
                instr.outName = this.parentCFG.getTmpName();

            output += instr + ";";

            if (instr !== this.instrs[this.instrs.length - 1])
                output += "\n";
        }

        return output;
    }

    /**
    Add an instruction at the end of the block
    */
    this.addInstr = function(instr)
    {
        instr.parentBlock = this;

        this.instrs.push(instr);
    }

    /**
    Label name string for this basic block
    @field
    */
    this.label = "";

    /**
    List of IR instructions
    @field
    */
    this.instrs = [];

    /**
    Parent control flow graph
    @field
    */
    this.parentCFG = cfg;
}

cfg = new ControlFlowGraph();

entry = cfg.getEntryBlock();

block2 = cfg.getNewBlock();
block2.label = "fooblock";

entry.addInstr(new JumpInstr(entry));
entry.addInstr(new JumpInstr(block2));

//block2.addInstr(new IntConst(1));
block2.addInstr(new ArithInstr(ArithOp.ADD, new IntConst(1), new IntConst(2)));

print("Printing");

print(cfg);

print("done");
